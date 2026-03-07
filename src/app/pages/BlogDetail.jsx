import Header from '../components/Header';
import Footer from '../components/Footer';
import blogService from "../services/blogService";
import { Link, useNavigate } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    setUserRole(role);

    const data = blogService.getBlogById(id);
    if (data) {
      setBlog(data);
    }
    setLoading(false);
  }, [id]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      const success = blogService.deleteBlog(parseInt(id));
      if (success) {
        navigate('/blog');
      } else {
        alert("Failed to delete the blog post. Note: Default blogs cannot be deleted.");
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          setActiveSection(section.getAttribute("data-section"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const relatedCourses = [
    {
      id: 1,
      title: "Complete React Developer Course",
      description: "Master React from basics to advanced concepts with hands-on projects",
      instructor: "Jane Doe",
      duration: "24 hours",
      level: "Beginner to Advanced",
      rating: 4.8,
      students: "45,230",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNvdXJzZSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzE1NDQyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "React Interview Preparation",
      description: "Ace your React interviews with common questions and practical solutions",
      instructor: "John Smith",
      duration: "8 hours",
      level: "Intermediate",
      rating: 4.9,
      students: "22,450",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzE1MTg5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "JavaScript Fundamentals for React",
      description: "Build a strong JavaScript foundation before diving into React development",
      instructor: "Sarah Johnson",
      duration: "16 hours",
      level: "Beginner",
      rating: 4.7,
      students: "38,900",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwcHJvZ3JhbW1pbmclMjB0dXRvcmlhbHxlbnwxfHx8fDE3NzE2MDM2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const suggestions = [
    {
      id: 1,
      type: "article",
      title: "10 Common React Mistakes and How to Avoid Them",
      readTime: "5 min read"
    },
    {
      id: 2,
      type: "video",
      title: "React Hooks Deep Dive - Complete Tutorial",
      readTime: "45 min watch"
    },
    {
      id: 3,
      type: "workshop",
      title: "Building Real-World React Applications Workshop",
      readTime: "3 hours"
    },
    {
      id: 4,
      type: "article",
      title: "State Management in React: A Complete Guide",
      readTime: "8 min read"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#14627a]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-8">The post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="bg-[#14627a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0f4a5b] transition-all">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Admin Actions */}
        {(userRole === 'admin' || userRole === 'editor') && !blog.isDefault && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex gap-4 justify-end"
          >
            <Link
              to={`/blog/editor/${id}`}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#14627a] text-[#14627a] rounded-lg font-semibold hover:bg-[#14627a]/5 transition-all"
            >
              ✏️ Edit Post
            </Link>
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-all"
            >
              🗑️ Delete Post
            </button>
          </motion.div>
        )}

        {/* Blog Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="font-['Public_Sans:SemiBold',sans-serif] text-3xl sm:text-4xl lg:text-[48px] lg:leading-[60px] bg-gradient-to-r from-[#101828] via-[#1e2939] to-[#101828] bg-clip-text text-transparent mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center gap-3">
            <span className="font-['Merriweather:Regular',sans-serif] text-sm text-[#4a5565]">
              {blog.date}
            </span>
            <div className="bg-[#99a1af] rounded-full size-1" />
            <span className="font-['Merriweather:Regular',sans-serif] text-sm text-[#4a5565]">
              {blog.readTime}
            </span>
            <div className="bg-[#99a1af] rounded-full size-1" />
            <span className="px-2 py-0.5 bg-[#f0f9fc] text-[#14627a] text-xs font-semibold rounded">
              {blog.category}
            </span>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 sm:mb-12"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-w-[880px] mx-auto rounded-xl sm:rounded-[14px] shadow-lg object-cover max-h-[500px]"
          />
        </motion.div>

        {/* Author Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4 mb-10 sm:mb-12"
        >
          <div className="relative flex-shrink-0">
            <div className="absolute bg-gradient-to-r from-[#14627a] to-[#1a9b8e] rounded-full size-[68px] blur-[8px] opacity-30" />
            <div className="relative w-[64px] h-[64px] bg-gradient-to-br from-[#14627a] to-[#0d4d5e] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              {blog.author.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
          </div>
          <div>
            <p className="font-['Merriweather:Bold',sans-serif] text-lg text-[#101828]">
              {blog.author}
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-sm text-[#4a5565]">
              {blog.isDefault ? 'EduTech Team' : 'Community Author'}
            </p>
          </div>
        </motion.div>

        {/* Table of Contents */}
        {blog.sections && blog.sections.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[rgba(255,255,255,0.8)] backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1)] border-b-4 border-r-2 border-[rgba(0,0,0,0.2)] mb-10 sm:mb-12"
          >
            <h3 className="font-['Merriweather:Bold',sans-serif] text-2xl text-[#101828] mb-6">
              In this article
            </h3>
            <ul className="space-y-2">
              {blog.sections.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => {
                    const el = document.querySelector(`[data-section="${item.id}"]`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`group relative flex flex-col cursor-pointer rounded-lg transition-all duration-200 overflow-hidden
                    ${activeSection === item.id ? 'bg-[#eaf4f7]' : 'hover:bg-[#f4fafc]'}`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-[4px] rounded-r-full transition-all duration-300
                      ${activeSection === item.id
                        ? 'bg-[#14627a] opacity-100'
                        : 'bg-[#14627a] opacity-0 group-hover:opacity-40'}`}
                  />
                  <span
                    className={`pl-5 pr-4 py-3 font-['Merriweather:Regular',sans-serif] text-base sm:text-lg transition-all duration-200
                      ${activeSection === item.id
                        ? 'text-[#14627a] font-semibold translate-x-1'
                        : 'text-[#364153] group-hover:text-[#14627a] group-hover:translate-x-1'}`}
                  >
                    {index + 1}. {item.title}
                  </span>
                  <span
                    className={`block h-[2px] bg-[#14627a] rounded-full mx-5 transition-all duration-300 origin-left
                      ${activeSection === item.id
                        ? 'scale-x-100 opacity-100 mb-2'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60 mb-2'}`}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Excerpt/Quote Section */}
        {blog.excerpt && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#f0f9fc] to-[#f4fafb] border-l-4 border-[#14627a] rounded-tr-2xl rounded-br-2xl p-6 sm:p-8 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] mb-10 sm:mb-12"
          >
            <p className="font-['Roboto:Medium',sans-serif] text-lg sm:text-2xl text-[#364153] leading-relaxed italic">
              "{blog.excerpt}"
            </p>
          </motion.div>
        )}

        {/* Blog Content Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-8 mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="font-['Roboto:Regular',sans-serif] text-lg sm:text-xl text-[#364153] leading-relaxed whitespace-pre-wrap"
          >
            {blog.content}
          </motion.div>

          {/* Render Sections if available */}
          {blog.sections && blog.sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={fadeInUp}
              data-section={section.id}
              className="pt-8 space-y-4 sm:space-y-6 scroll-mt-24"
            >
              <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-2xl sm:text-4xl text-black">
                {index + 1}. {section.title}
              </h2>
              {/* Note: In a real app we might have content per section, but here we're using the main content */}
              <p className="font-['Roboto:Regular',sans-serif] text-lg sm:text-xl text-[#364153] leading-relaxed">
                Continue exploring {section.title.toLowerCase()} in depth as we dive into more details below.
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Suggestions Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-['Merriweather:Bold',sans-serif] text-3xl sm:text-4xl text-[#101828] mb-8"
          >
            Recommended for You
          </motion.h2>
          {/* 1 col on mobile, 2 cols on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {suggestions.map((suggestion) => (
              <motion.div
                key={suggestion.id}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-[12px] shadow-lg cursor-pointer border border-gray-100 hover:border-[#14627a] transition-all"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${suggestion.type === "article"
                      ? "bg-blue-100 text-blue-700"
                      : suggestion.type === "video"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-green-100 text-green-700"
                      }`}
                  >
                    {suggestion.type.toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Merriweather:Bold',sans-serif] text-base sm:text-lg text-[#101828] mb-2">
                      {suggestion.title}
                    </h3>
                    <p className="font-['Roboto:Regular',sans-serif] text-sm text-[#4a5565]">
                      {suggestion.readTime}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Courses Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="font-['Merriweather:Bold',sans-serif] text-3xl sm:text-4xl text-[#101828] mb-3">
              Continue Learning React
            </h2>
            <p className="font-['Roboto:Regular',sans-serif] text-base sm:text-lg text-[#4a5565]">
              Take your React skills to the next level with these recommended courses
            </p>
          </motion.div>

          {/* 1 col → 2 cols on md → 3 cols on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-48 sm:h-[200px] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#14627a] text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                    {course.level}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-['Merriweather:Bold',sans-serif] text-lg sm:text-xl text-[#101828] mb-3">
                    {course.title}
                  </h3>
                  <p className="font-['Roboto:Regular',sans-serif] text-sm text-[#4a5565] mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ffc27a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="font-['Roboto:Medium',sans-serif] text-sm text-[#364153]">
                        {course.rating} ({course.students} students)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#4a5565]">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-['Roboto:Regular',sans-serif] text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#4a5565]">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="font-['Roboto:Regular',sans-serif] text-sm">{course.instructor}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="font-['Public_Sans:SemiBold',sans-serif] text-xl sm:text-2xl text-[#14627a]">
                      {course.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#14627a] text-white px-4 sm:px-5 py-2.5 rounded-lg font-['Public_Sans:Medium',sans-serif] text-sm hover:bg-[#0f4a5c] transition-colors"
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Keep Reading Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-['Merriweather:Bold',sans-serif] text-3xl sm:text-4xl text-[#101828] mb-8 sm:mb-12"
          >
            Keep reading
          </motion.h2>

          {/* 1 col → 2 cols on md → 3 cols on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNTEzNTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Announcing Azure DevOps Server General Availability",
                description: "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna."
              },
              {
                image: "https://images.unsplash.com/photo-1654277041218-84424c78f0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXRodWIlMjBkZXZvcHMlMjBjb2Rpbmd8ZW58MXx8fHwxNzcxNjAzODg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Modern DevOps Practices for 2025",
                description: "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna."
              },
              {
                image: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwdGVhbXxlbnwxfHx8fDE3NzE2MDM4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "DevOps and GitHub Repositories — Next Steps in the Path to Agentic AI",
                description: "Rutrum aliquet eros semper nunc. In adipiscing augue sagittis, fermentum donec nunc lacinia."
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-[rgba(255,255,255,0.8)] rounded-2xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer"
              >
                <div className="h-48 sm:h-[224px] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-['Merriweather:Bold',sans-serif] text-xl sm:text-2xl text-[#101828] leading-snug mb-3">
                    {article.title}
                  </h3>
                  <p className="font-['Roboto:Regular',sans-serif] text-sm sm:text-base text-[#4a5565] leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white to-[#f0f9fc] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-lg border border-gray-100"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="relative flex-shrink-0">
              <div className="relative w-24 h-24 bg-gradient-to-br from-[#14627a] to-[#0d4d5e] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                {blog.author.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-['Merriweather:Regular',sans-serif] text-2xl sm:text-3xl text-[#101828] mb-4">
                Written by {blog.author}
              </h3>
              <p className="font-['Roboto:Regular',sans-serif] text-base sm:text-lg text-[#4a5565] leading-relaxed mb-6">
                Expert contributor focusing on {blog.category} and modern engineering practices. Passionate about sharing knowledge and building scalable applications.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
