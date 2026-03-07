import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ─────────────────────────────────────────────────────────────────────────────
// API Service Layer (remains unchanged)
// ─────────────────────────────────────────────────────────────────────────────
const apiService = {
  fetchCourses: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(coursesData), 500);
    });
  },
  fetchCoursesByCategory: async (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = coursesData.filter(
          (course) => course.category.toLowerCase() === category.toLowerCase()
        );
        resolve(filtered);
      }, 500);
    });
  },
};

const coursesData = [
  { id: 1, title: 'Complete Web Development Bootcamp', description: 'Master HTML, CSS, JavaScript, React, Node.js and become a full-stack developer.', image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=600', price: 89.99, category: 'Web Development', level: 'Beginner', rating: 4.8, students: 12543, duration: '40 hours', isPaid: true },
  { id: 2, title: 'Data Science & Machine Learning A-Z', description: 'Learn Python, statistics, data visualization, and build real-world ML models.', image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600', price: 0, category: 'Data Science', level: 'Intermediate', rating: 4.9, students: 8932, duration: '35 hours', isPaid: false },
  { id: 3, title: 'Graphic Design Masterclass', description: 'Learn Photoshop, Illustrator, and Figma. Create stunning designs from scratch.', image: 'https://images.unsplash.com/photo-1622784043149-82f7c74f8678?w=600', price: 69.99, category: 'Design', level: 'Beginner', rating: 4.7, students: 5621, duration: '25 hours', isPaid: true },
  { id: 4, title: 'Digital Marketing Pro Certificate', description: 'SEO, social media, content marketing, and analytics to grow your business online.', image: 'https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?w=600', price: 0, category: 'Marketing', level: 'Beginner', rating: 4.6, students: 10234, duration: '20 hours', isPaid: false },
  { id: 5, title: 'Mobile App Development with React Native', description: 'Build iOS and Android apps with React Native and deploy to app stores.', image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=600', price: 94.99, category: 'Mobile Development', level: 'Advanced', rating: 4.9, students: 7845, duration: '45 hours', isPaid: true },
  { id: 6, title: 'AI & Deep Learning Specialization', description: 'Neural networks, computer vision, NLP with TensorFlow and PyTorch.', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600', price: 129.99, category: 'Data Science', level: 'Advanced', rating: 4.8, students: 6234, duration: '60 hours', isPaid: true },
  { id: 7, title: 'Professional Photography Course', description: 'Master camera settings, composition, lighting, and photo editing techniques.', image: 'https://images.unsplash.com/photo-1622319977720-9949ac28adc4?w=600', price: 0, category: 'Photography', level: 'Beginner', rating: 4.7, students: 9456, duration: '18 hours', isPaid: false },
  { id: 8, title: 'Business Management & Strategy', description: 'Learn leadership, project management, finance, and strategic planning.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600', price: 79.99, category: 'Business', level: 'Intermediate', rating: 4.5, students: 11234, duration: '30 hours', isPaid: true },
  { id: 9, title: 'Cybersecurity & Ethical Hacking', description: 'Network security, penetration testing, and protecting systems from threats.', image: 'https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?w=600', price: 99.99, category: 'IT & Security', level: 'Advanced', rating: 4.9, students: 5678, duration: '50 hours', isPaid: true },
];

// ---------- Improved Presentational Helpers ----------
function CourseCard({ course }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(20,98,122,0.12)] transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="backdrop-blur-md bg-white/80 text-[#14627a] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/20 uppercase tracking-widest">
            {course.level}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-[#FFC27A] text-[#06213d] text-[11px] font-black px-2 py-1 rounded-lg flex items-center gap-1 shadow-lg">
          ★ {course.rating}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-[#14627a] text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-70">
          {course.category}
        </span>
        <h3 className="text-lg font-bold text-[#06213d] mb-2 leading-tight group-hover:text-[#14627a] transition-colors line-clamp-2">
          {course.title}
        </h3>
        <p className="text-[#6d737a] text-sm mb-6 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        <div className="mt-auto pt-5 border-t border-gray-50 flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-400 block font-medium">Price</span>
            <p className="text-xl font-black text-[#14627a]">
              {course.price === 0 ? (
                <span className="text-green-600">FREE</span>
              ) : (
                `$${course.price}`
              )}
            </p>
          </div>
          <Link
            to="/apply"
            className="bg-[#06213d] text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-[#14627a] transform active:scale-95 transition-all shadow-md"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function FiltersSidebar({
  searchTerm, onSearchChange, paid, free, togglePaid, toggleFree,
  levels, selectedLevels, toggleLevel, categories, selectedCategories,
  toggleCategory, clear, hasActive,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const activeFiltersCount = (paid ? 1 : 0) + (free ? 1 : 0) + selectedLevels.length + selectedCategories.length;

  const FilterGroup = ({ title, children, count }) => (
    <div className="py-6 border-b border-gray-50 last:border-0">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[11px] font-black text-[#06213d] uppercase tracking-[0.15em]">
          {title}
        </h3>
        {count > 0 && (
          <span className="w-5 h-5 flex items-center justify-center bg-[#14627a] text-white text-[10px] rounded-full font-bold">
            {count}
          </span>
        )}
      </div>
      {children}
    </div>
  );

  const CheckboxItem = ({ label, checked, onChange }) => (
    <label className="flex items-center group cursor-pointer py-1.5">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer appearance-none w-5 h-5 rounded-md border-2 border-gray-200 checked:bg-[#14627a] checked:border-[#14627a] transition-all cursor-pointer"
        />
        <svg className="absolute w-3 h-3 text-white left-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className={`ml-3 text-sm transition-colors ${checked ? 'text-[#14627a] font-bold' : 'text-[#6d737a] font-medium group-hover:text-[#14627a]'}`}>
        {label}
      </span>
    </label>
  );

  return (
    <>
      {/* Mobile Trigger */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-8 left-6 z-50 bg-[#14627a] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#06213d]/60 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside className={`
        fixed lg:sticky lg:top-24 inset-y-0 left-0 z-[70] w-80 bg-white lg:bg-transparent transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:block p-6 lg:p-0
      `}>
        <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_50px_rgba(0,0,0,0.04)] border border-gray-100 lg:h-fit">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-black text-[#06213d]">Filters</h2>
            {hasActive && (
              <button onClick={clear} className="text-[10px] font-bold text-red-500 uppercase tracking-widest hover:underline">
                Reset
              </button>
            )}
          </div>

          <div className="space-y-2">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search keywords..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#14627a]/20 outline-none text-sm font-medium transition-all"
              />
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" />
              </svg>
            </div>

            <FilterGroup title="Pricing" count={(paid ? 1 : 0) + (free ? 1 : 0)}>
              <div className="space-y-1">
                <CheckboxItem label="Paid Access" checked={paid} onChange={togglePaid} />
                <CheckboxItem label="Free Learning" checked={free} onChange={toggleFree} />
              </div>
            </FilterGroup>

            <FilterGroup title="Experience" count={selectedLevels.length}>
              <div className="space-y-1">
                {levels.map(lvl => (
                  <CheckboxItem key={lvl} label={lvl} checked={selectedLevels.includes(lvl)} onChange={() => toggleLevel(lvl)} />
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Categories" count={selectedCategories.length}>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                      selectedCategories.includes(cat)
                        ? 'bg-[#14627a] text-white shadow-md'
                        : 'bg-gray-50 text-[#6d737a] hover:bg-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FilterGroup>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full mt-8 lg:hidden bg-[#06213d] text-white py-4 rounded-2xl font-bold"
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </>
  );
}

export default function Courses() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [paid, setPaid] = useState(false);
  const [free, setFree] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const data = await apiService.fetchCourses();
        setCourses(data);
        setError(null);
      } catch (err) {
        setError('Failed to load courses');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) setSelectedCategories([categoryParam]);
  }, [searchParams]);

  const categories = useMemo(() => [...new Set(courses.map(c => c.category))], [courses]);
  const levels = useMemo(() => ['Beginner', 'Intermediate', 'Advanced'], []);

  const toggleSelection = useCallback((setter, value) => {
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  }, []);

  const handleClear = useCallback(() => {
    setSearchTerm(''); setPaid(false); setFree(false);
    setSelectedCategories([]); setSelectedLevels([]);
  }, []);

  const hasActive = searchTerm !== '' || paid || free || selectedCategories.length > 0 || selectedLevels.length > 0;

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const q = searchTerm.toLowerCase();
      const matchesSearch = course.title.toLowerCase().includes(q) || course.description.toLowerCase().includes(q);
      const matchesPrice = (!paid && !free) || (paid && course.isPaid) || (free && !course.isPaid);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
      return matchesSearch && matchesPrice && matchesCategory && matchesLevel;
    });
  }, [searchTerm, paid, free, selectedCategories, selectedLevels, courses]);

  return (
    <div className="bg-[#fcfdfe] min-h-screen font-sans">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <header className="mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl lg:text-6xl font-black text-[#06213d] tracking-tighter mb-4">
              Expand your <span className="text-[#14627a]">horizon.</span>
            </h1>
            <p className="text-[#6d737a] text-lg max-w-xl font-medium leading-relaxed">
              Curated masterclasses from industry experts. Choose your path and start building today.
            </p>
          </motion.div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          <FiltersSidebar
            searchTerm={searchTerm} onSearchChange={setSearchTerm}
            paid={paid} free={free} togglePaid={() => setPaid(!paid)} toggleFree={() => setFree(!free)}
            levels={levels} selectedLevels={selectedLevels} toggleLevel={(lvl) => toggleSelection(setSelectedLevels, lvl)}
            categories={categories} selectedCategories={selectedCategories} toggleCategory={(cat) => toggleSelection(setSelectedCategories, cat)}
            clear={handleClear} hasActive={hasActive}
          />

          <div className="flex-1">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#06213d]">
                {loading ? '...' : `${filteredCourses.length} results found`}
              </h3>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-[420px] bg-gray-100 rounded-[32px] animate-pulse" />
                ))}
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="text-center py-24 bg-gray-50 rounded-[40px] border border-dashed border-gray-200">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-[#06213d] mb-2">No matches found</h3>
                <p className="text-gray-500 mb-8">Try adjusting your filters or search terms.</p>
                <button onClick={handleClear} className="bg-[#14627a] text-white px-8 py-3 rounded-xl font-bold shadow-lg">
                  View All Courses
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
                <AnimatePresence mode="popLayout">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}