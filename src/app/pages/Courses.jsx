import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ------------------------------------------------------------------------------
// sample data – in a real app this would come from an API or context
const coursesData = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description:
      'Master HTML, CSS, JavaScript, React, Node.js and become a full-stack developer.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=600',
    price: 89.99,
    category: 'Web Development',
    level: 'Beginner',
    rating: 4.8,
    students: 12543,
    duration: '40 hours',
    isPaid: true,
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning A-Z',
    description:
      'Learn Python, statistics, data visualization, and build real-world ML models.',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600',
    price: 0,
    category: 'Data Science',
    level: 'Intermediate',
    rating: 4.9,
    students: 8932,
    duration: '35 hours',
    isPaid: false,
  },
  {
    id: 3,
    title: 'Graphic Design Masterclass',
    description:
      'Learn Photoshop, Illustrator, and Figma. Create stunning designs from scratch.',
    image: 'https://images.unsplash.com/photo-1622784043149-82f7c74f8678?w=600',
    price: 69.99,
    category: 'Design',
    level: 'Beginner',
    rating: 4.7,
    students: 5621,
    duration: '25 hours',
    isPaid: true,
  },
  {
    id: 4,
    title: 'Digital Marketing Pro Certificate',
    description:
      'SEO, social media, content marketing, and analytics to grow your business online.',
    image: 'https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?w=600',
    price: 0,
    category: 'Marketing',
    level: 'Beginner',
    rating: 4.6,
    students: 10234,
    duration: '20 hours',
    isPaid: false,
  },
  {
    id: 5,
    title: 'Mobile App Development with React Native',
    description:
      'Build iOS and Android apps with React Native and deploy to app stores.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=600',
    price: 94.99,
    category: 'Mobile Development',
    level: 'Advanced',
    rating: 4.9,
    students: 7845,
    duration: '45 hours',
    isPaid: true,
  },
  {
    id: 6,
    title: 'AI & Deep Learning Specialization',
    description:
      'Neural networks, computer vision, NLP with TensorFlow and PyTorch.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600',
    price: 129.99,
    category: 'Data Science',
    level: 'Advanced',
    rating: 4.8,
    students: 6234,
    duration: '60 hours',
    isPaid: true,
  },
  {
    id: 7,
    title: 'Professional Photography Course',
    description:
      'Master camera settings, composition, lighting, and photo editing techniques.',
    image: 'https://images.unsplash.com/photo-1622319977720-9949ac28adc4?w=600',
    price: 0,
    category: 'Photography',
    level: 'Beginner',
    rating: 4.7,
    students: 9456,
    duration: '18 hours',
    isPaid: false,
  },
  {
    id: 8,
    title: 'Business Management & Strategy',
    description:
      'Learn leadership, project management, finance, and strategic planning.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
    price: 79.99,
    category: 'Business',
    level: 'Intermediate',
    rating: 4.5,
    students: 11234,
    duration: '30 hours',
    isPaid: true,
  },
  {
    id: 9,
    title: 'Cybersecurity & Ethical Hacking',
    description:
      'Network security, penetration testing, and protecting systems from threats.',
    image: 'https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?w=600',
    price: 99.99,
    category: 'IT & Security',
    level: 'Advanced',
    rating: 4.9,
    students: 5678,
    duration: '50 hours',
    isPaid: true,
  },
];

// ---------- presentational helpers ----------
function CourseCard({ course }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col border border-gray-100"
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-44 object-cover"
      />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#14627a] text-[10px] font-black uppercase tracking-tight">
            {course.category}
          </span>
          <span className="text-[#FFC27A] text-xs font-bold">
            ★ {course.rating}
          </span>
        </div>

        <h3 className="text-base font-bold text-[#06213d] mb-2 leading-tight h-10 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-[#6d737a] text-xs mb-4 line-clamp-2 flex-1">
          {course.description}
        </p>

        <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
          <p className="text-base font-black text-[#06213d]">
            {course.price === 0 ? 'FREE' : `$${course.price}`}
          </p>
          <Link
            to={`/course/${course.id}`}
            className="bg-[#14627a] text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-[#125364] transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function FiltersSidebar({
  searchTerm,
  onSearchChange,
  paid,
  free,
  togglePaid,
  toggleFree,
  levels,
  selectedLevels,
  toggleLevel,
  categories,
  selectedCategories,
  toggleCategory,
  clear,
  hasActive,
}) {
  return (
    <aside className="w-full lg:w-72 space-y-8 bg-white p-6 rounded-2xl shadow-sm h-fit sticky top-6 border border-gray-100">
      <div>
        <label className="block text-sm font-bold text-[#06213d] mb-2 uppercase tracking-wider">
          Search
        </label>
        <input
          type="text"
          placeholder="What do you want to learn?"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full p-3 bg-gray-50 rounded-xl focus:ring-1 focus:ring-[#14627a] outline-none border border-gray-200 transition-all text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#06213d] mb-3 uppercase tracking-wider">
          Pricing
        </label>
        <div className="space-y-2">
          {[
            { label: 'Paid', checked: paid, onChange: togglePaid },
            { label: 'Free', checked: free, onChange: toggleFree },
          ].map((p) => (
            <label key={p.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={p.checked}
                onChange={p.onChange}
                className="
                  w-4 h-4 rounded border-gray-300
                  accent-[#14627a]             /* tick + background when checked */
                  checked:bg-[#14627a]         /* background on check */
                  checked:border-[#14627a]
                  focus:ring-[#14627a]
                  transition-colors
                "
              />
              <span className="text-gray-600 group-hover:text-[#06213d] text-sm transition-colors">
                {p.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#06213d] mb-3 uppercase tracking-wider">
          Difficulty Level
        </label>
        <div className="space-y-2">
          {levels.map((lvl) => (
            <label key={lvl} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedLevels.includes(lvl)}
                onChange={() => toggleLevel(lvl)}
                className="
                  w-4 h-4 rounded border-gray-300
                  accent-[#14627a]             /* tick + background when checked */
                  checked:bg-[#14627a]         /* background on check */
                  checked:border-[#14627a]
                  focus:ring-[#14627a]
                  transition-colors
                "
              />
              <span className="text-gray-600 group-hover:text-[#06213d] text-sm transition-colors">
                {lvl}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#06213d] mb-3 uppercase tracking-wider">
          Categories
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                selectedCategories.includes(cat)
                  ? 'bg-[#14627a] text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {hasActive && (
        <button
          onClick={clear}
          className="w-full mt-4 py-2 border-t border-gray-100 text-[#14627a] text-xs font-bold uppercase tracking-widest hover:text-[#125364] transition-colors text-center"
        >
          Clear All Filters
        </button>
      )}
    </aside>
  );
}

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [paid, setPaid] = useState(false);
  const [free, setFree] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const categories = useMemo(
    () => [...new Set(coursesData.map((c) => c.category))],
    []
  );
  const levels = useMemo(() => ['Beginner', 'Intermediate', 'Advanced'], []);

  const toggleSelection = useCallback((current, setter, value) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }, []);

  const handleClear = useCallback(() => {
    setSearchTerm('');
    setPaid(false);
    setFree(false);
    setSelectedCategories([]);
    setSelectedLevels([]);
  }, []);

  const hasActive =
    searchTerm !== '' || paid || free || selectedCategories.length > 0 ||
    selectedLevels.length > 0;

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const title = course.title.toLowerCase();
      const desc = course.description.toLowerCase();
      const q = searchTerm.toLowerCase();

      const matchesSearch = title.includes(q) || desc.includes(q);
      const matchesPrice =
        (!paid && !free) || (paid && course.isPaid) || (free && !course.isPaid);
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(course.category);
      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(course.level);

      return (
        matchesSearch && matchesPrice && matchesCategory && matchesLevel
      );
    });
  }, [searchTerm, paid, free, selectedCategories, selectedLevels]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Courses
          </h1>
          <p className="text-gray-600 mt-2">
            Discover the perfect course to advance your career.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10">
          <FiltersSidebar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            paid={paid}
            free={free}
            togglePaid={() => setPaid((v) => !v)}
            toggleFree={() => setFree((v) => !v)}
            levels={levels}
            selectedLevels={selectedLevels}
            toggleLevel={(lvl) =>
              toggleSelection(selectedLevels, setSelectedLevels, lvl)
            }
            categories={categories}
            selectedCategories={selectedCategories}
            toggleCategory={(cat) =>
              toggleSelection(selectedCategories, setSelectedCategories, cat)
            }
            clear={handleClear}
            hasActive={hasActive}
          />

          <div className="flex-1">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-200">
                <p className="text-lg font-bold text-gray-400">
                  No matching courses found
                </p>
                <button
                  onClick={handleClear}
                  className="text-blue-600 text-sm font-bold mt-2 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}

