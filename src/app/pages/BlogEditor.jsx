import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSave, FiSend, FiImage, FiPlus, FiTrash2, FiClock,
  FiType, FiTag, FiLayout, FiChevronLeft, FiEye
} from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import blogService from '../services/blogService';

export default function BlogEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  const [userRole, setUserRole] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isPreview, setIsPreview] = useState(false);

  const [blogData, setBlogData] = useState({
    title: '',
    slug: '',
    category: 'Development',
    excerpt: '',
    content: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    readTime: 0,
    image: '',
    sections: [],
    relatedCourses: [],
    relatedPosts: []
  });

  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({ title: '', id: '' });
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [imagePreview, setImagePreview] = useState('');

  // Configuration Constants
  const categories = ['Development', 'DevOps', 'Architecture', 'AI/ML', 'Security', 'Business'];
  const allCourses = [
    { id: 1, title: 'Complete React Developer Course' },
    { id: 2, title: 'React Interview Preparation' },
  ];

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const userName = localStorage.getItem('userName');
    setUserRole(role);

    if (role === 'admin' || role === 'editor') {
      setHasPermission(true);
    } else {
      setHasPermission(false);
      setLoading(false);
      return;
    }

    if (isEditing) {
      const existingBlog = blogService.getBlogById(id);
      if (existingBlog) {
        setBlogData(existingBlog);
        setSections(existingBlog.sections || []);
        setImagePreview(existingBlog.image);
      } else {
        alert("Blog post not found");
        navigate('/blog');
      }
    } else {
      setBlogData(prev => ({ ...prev, author: userName || 'Author Name' }));
    }

    setLoading(false);
  }, [id, isEditing, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prev => {
      const updates = { ...prev, [name]: value };
      if (name === 'title') {
        updates.slug = value
          .toLowerCase()
          .replace(/[^\w ]+/g, '')
          .replace(/ +/g, '-');
      }
      return updates;
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setBlogData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateReadTime = (text) => {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / 225) || 0;
  };

  const addSection = () => {
    if (newSection.title.trim()) {
      const id = newSection.title.toLowerCase().replace(/\s+/g, '-');
      setSections([...sections, { title: newSection.title, id }]);
      setNewSection({ title: '', id: '' });
    }
  };

  const handleAction = (status) => {
    if (!blogData.title || !blogData.content) {
      alert('Missing required fields: Title and Content');
      return;
    }

    const readTime = `${calculateReadTime(blogData.content)} min read`;
    const blogToSave = {
      ...blogData,
      title: blogData.title,
      slug: blogData.slug,
      category: blogData.category,
      excerpt: blogData.excerpt,
      content: blogData.content,
      author: blogData.author,
      image: blogData.image || 'https://images.unsplash.com/photo-1633356715640-24c08369fdc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: readTime,
      isPublished: status === 'publish',
      sections: sections,
      date: isEditing ? blogData.date : new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    try {
      if (isEditing) {
        blogService.updateBlog(parseInt(id), blogToSave);
      } else {
        blogService.addBlog(blogToSave);
      }
      alert(`Blog ${status === 'publish' ? 'Published' : 'Saved'} successfully!`);
      navigate(isEditing ? `/blog/${id}` : '/blog');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Error saving blog. Please try again.');
    }
  };

  if (loading) return <LoadingSpinner />;
  if (!hasPermission) return <AccessDenied navigate={navigate} />;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Sticky Action Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/blog')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <FiChevronLeft size={20} />
            </button>
            <h1 className="text-lg font-bold text-slate-800 hidden md:block">
              {isEditing ? `Editing: ${blogData.title}` : (blogData.title || "New Blog Post")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPreview(!isPreview)}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 font-medium hover:bg-slate-100 rounded-lg transition-all"
            >
              <FiEye /> {isPreview ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={() => handleAction('draft')}
              className="flex items-center gap-2 px-4 py-2 text-[#14627a] font-semibold hover:bg-slate-50 rounded-lg border border-[#14627a]/20 transition-all"
            >
              <FiSave /> Draft
            </button>
            <button
              onClick={() => handleAction('publish')}
              className="flex items-center gap-2 px-5 py-2 bg-[#14627a] text-white font-semibold rounded-lg hover:bg-[#0f4a5b] shadow-lg shadow-[#14627a]/20 transition-all"
            >
              <FiSend /> Publish
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Editor Side */}
        <div className="lg:col-span-8 space-y-6">
          {isPreview ? (
            <PreviewPane blogData={blogData} />
          ) : (
            <>
              {/* Primary Content Card */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-1 bg-slate-50 border-b border-slate-100 flex gap-1">
                  <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Editor</div>
                </div>
                <div className="p-8 space-y-6">
                  <input
                    type="text"
                    name="title"
                    value={blogData.title}
                    onChange={handleInputChange}
                    placeholder="Enter an engaging title..."
                    className="w-full text-4xl font-extrabold text-slate-900 placeholder:text-slate-300 focus:outline-none border-none p-0"
                  />

                  <div className="flex items-center gap-2 text-slate-400 text-sm pb-4 border-b border-slate-100">
                    <FiTag />
                    <span className="font-mono">slug:</span>
                    <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{blogData.slug || 'your-post-url'}</span>
                  </div>

                  <textarea
                    name="content"
                    value={blogData.content}
                    onChange={handleInputChange}
                    placeholder="Tell your story..."
                    rows="20"
                    className="w-full text-lg text-slate-700 leading-relaxed placeholder:text-slate-300 focus:outline-none border-none p-0 resize-none"
                  />
                </div>
                <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
                  <div className="flex gap-4">
                    <span>Words: <strong>{blogData.content.split(/\s+/).filter(x => x).length}</strong></span>
                    <span>Reading Time: <strong>{calculateReadTime(blogData.content)} min</strong></span>
                  </div>
                  <span className="italic text-slate-400">Autosaved at {new Date().toLocaleTimeString()}</span>
                </div>
              </section>

              {/* Excerpt Card */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-4 text-slate-800 font-bold">
                  <FiType /> Short Summary (Excerpt)
                </div>
                <textarea
                  name="excerpt"
                  value={blogData.excerpt}
                  onChange={handleInputChange}
                  placeholder="A brief summary for cards and SEO..."
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#14627a]/20 focus:border-[#14627a] outline-none transition-all"
                  rows="3"
                />
              </section>
            </>
          )}
        </div>

        {/* Sidebar Controls */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Cover Image */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest">
              <FiImage /> Featured Image
            </h3>
            <div className="relative group aspect-video rounded-xl bg-slate-100 border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center transition-all hover:border-[#14627a]">
              {imagePreview ? (
                <>
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <button onClick={() => setImagePreview('')} className="bg-white p-2 rounded-full text-red-500 shadow-xl">
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </>
              ) : (
                <label className="cursor-pointer text-center p-4">
                  <div className="bg-white p-3 rounded-full shadow-sm mb-2 mx-auto w-fit text-[#14627a]">
                    <FiPlus size={24} />
                  </div>
                  <p className="text-xs font-medium text-slate-500">Upload high-res cover</p>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              )}
            </div>
          </div>

          {/* Categorization */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest">
              <FiLayout /> Classification
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase">Category</label>
                <select
                  name="category"
                  value={blogData.category}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase">Author Display</label>
                <input
                  type="text"
                  name="author"
                  value={blogData.author}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none"
                />
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest">
              <FiPlus /> Sections
            </h3>
            <div className="flex gap-2 mb-4">
              <input
                value={newSection.title}
                onChange={(e) => setNewSection({ ...newSection, title: e.target.value })}
                placeholder="Section title..."
                className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none"
              />
              <button onClick={addSection} className="p-2 bg-slate-900 text-white rounded-lg"><FiPlus /></button>
            </div>
            <ul className="space-y-2">
              {sections.map((s, i) => (
                <li key={i} className="flex justify-between items-center text-xs bg-slate-50 p-2 rounded border border-slate-100">
                  <span className="text-slate-600 font-medium">{s.title}</span>
                  <button onClick={() => setSections(sections.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-600">
                    <FiTrash2 />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

// Sub-components for cleaner structure
function PreviewPane({ blogData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200 prose prose-slate max-w-none"
    >
      <div className="text-slate-500 mb-4 flex gap-4 text-sm font-medium">
        <span>{blogData.category}</span>
        <span>•</span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
      <h1 className="text-5xl font-extrabold mb-8 text-slate-900 leading-tight">{blogData.title || "Your Title Here"}</h1>
      <div className="italic text-xl text-slate-500 mb-8 border-l-4 border-slate-200 pl-6">
        {blogData.excerpt || "Add an excerpt to see it here..."}
      </div>
      {blogData.image && <img src={blogData.image} alt="Cover" className="w-full rounded-2xl mb-8" />}
      <div className="whitespace-pre-wrap text-slate-700 leading-relaxed text-lg">
        {blogData.content || "Write some content to preview it."}
      </div>
    </motion.div>
  );
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#14627a]"></div>
    </div>
  );
}

function AccessDenied({ navigate }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="text-center max-w-sm">
        <div className="text-6xl mb-6">🚫</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Editor Access Restricted</h2>
        <p className="text-slate-500 mb-8">This portal is reserved for staff members only. Please contact your administrator for permissions.</p>
        <button
          onClick={() => navigate('/blog')}
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold"
        >
          Return to Library
        </button>
      </div>
    </div>
  )
}