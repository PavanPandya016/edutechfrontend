import { useState } from 'react';
import { motion } from 'motion/react'; 
import { Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "Why Most React Developers Fail Those Simple Interview Questions Even Know the Answers",
    image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGxhcHRvcCUyMGNvZGV8ZW58MXx8fHwxNzcxNTk2ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Development",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    excerpt: "Dive deep into the common pitfalls that trip up even experienced React developers during technical interviews and learn how to avoid them.",
    author: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Building Scalable Applications with Modern DevOps Practices",
    image: "https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc3MTU5Njg4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "DevOps",
    date: "Feb 14, 2026",
    readTime: "12 min read",
    excerpt: "Explore the latest DevOps methodologies and tools that are transforming how teams build, deploy, and maintain modern applications.",
    author: "Michael Chen"
  },
  {
    id: 3,
    title: "The Complete Guide to Web Performance Optimization",
    image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzE1MDQxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Performance",
    date: "Feb 13, 2026",
    readTime: "10 min read",
    excerpt: "Learn proven techniques to make your web applications lightning fast, from lazy loading to image optimization and beyond.",
    author: "Emily Rodriguez"
  },
  {
    id: 4,
    title: "Mastering Software Architecture in Distributed Systems",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTU5Njg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Architecture",
    date: "Feb 12, 2026",
    readTime: "15 min read",
    excerpt: "Understanding the principles and patterns that make distributed systems resilient, scalable, and maintainable in production.",
    author: "David Kim"
  },
  {
    id: 5,
    title: "Cloud Computing Trends Shaping the Future of Tech",
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NzE1MDYxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Cloud",
    date: "Feb 11, 2026",
    readTime: "9 min read",
    excerpt: "Discover how serverless, edge computing, and multi-cloud strategies are revolutionizing infrastructure and application deployment.",
    author: "Alex Thompson"
  },
  {
    id: 6,
    title: "Data Science Techniques for Real-World Business Problems",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzE1NTg2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Data Science",
    date: "Feb 10, 2026",
    readTime: "11 min read",
    excerpt: "Apply machine learning and statistical analysis to solve complex business challenges and drive data-driven decision making.",
    author: "Jessica Park"
  },
  {
    id: 7,
    title: "AI and Machine Learning: Beyond the Hype",
    image: "https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzcxNDk2OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "AI/ML",
    date: "Feb 9, 2026",
    readTime: "13 min read",
    excerpt: "A practical look at implementing AI solutions in production, including ethical considerations and real-world use cases.",
    author: "Robert Martinez"
  },
  {
    id: 8,
    title: "Cybersecurity Best Practices for Modern Applications",
    image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxNTgxMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Security",
    date: "Feb 8, 2026",
    readTime: "10 min read",
    excerpt: "Essential security practices every developer should implement to protect applications from common vulnerabilities and threats.",
    author: "Lisa Anderson"
  },
  {
    id: 9,
    title: "Mobile-First Design: Creating Exceptional User Experiences",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzcxNTQ5ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Design",
    date: "Feb 7, 2026",
    readTime: "7 min read",
    excerpt: "Design principles and techniques for creating engaging mobile experiences that users love and come back to regularly.",
    author: "Tom Wilson"
  },
  {
    id: 10,
    title: "Startup Innovation: Lessons from Silicon Valley",
    image: "https://images.unsplash.com/photo-1733925457822-64c3e048fa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGlubm92YXRpb258ZW58MXx8fHwxNzcxNTk2ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Business",
    date: "Feb 6, 2026",
    readTime: "14 min read",
    excerpt: "Insights from successful tech entrepreneurs on building products, scaling teams, and navigating the startup ecosystem.",
    author: "Kevin Brown"
  }
];

const categoryColors = {
  Development: 'bg-[#14627a]',
  DevOps: 'bg-[#125364]',
  Performance: 'bg-[#1b8a93]',
  Architecture: 'bg-[#0d4d5e]',
  Cloud: 'bg-[#16a5b1]',
  'Data Science': 'bg-[#17b3c1]',
  'AI/ML': 'bg-[#19c1cf]',
  Security: 'bg-[#14627a]',
  Design: 'bg-[#FFC27A] text-[#06213d]',
  Business: 'bg-[#0d4d5e]',
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Object.keys(categoryColors)];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f8fb] to-[#e8f2f8]">
      <Header />

      {/* hero */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#06213d] mb-4 sm:mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-[#6d737a] mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A blog about tech, real‑world tasks, and the latest news.
          </motion.p>

          {/* search */}
          <motion.div
            className="max-w-3xl mx-auto mb-6 sm:mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative">
              <input
                type="text"
                aria-label="Search articles"
                placeholder="Search for articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14627a] focus:border-transparent text-sm sm:text-base"
              />
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </motion.div>

          {/* category filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#14627a] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* posts */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                whileHover={{ y: -8 }}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium text-white shadow-lg ${categoryColors[post.category]}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {post.category}
                  </motion.div>
                </div>

                <div className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-[#06213d] mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#14627a] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#6d737a] mb-2 sm:mb-3">
                    {post.date} • {post.readTime}
                  </p>

                  <p className="text-sm sm:text-base text-[#6d737a] mb-3 sm:mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#14627a] to-[#0d4d5e] rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                        {post.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#06213d]">
                        {post.author}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#14627a] hover:text-[#0d4d5e] font-medium text-xs sm:text-sm flex items-center"
                    >
                      Read more&nbsp;&rarr;
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12 sm:py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-lg sm:text-xl text-[#6d737a]">
                No blog posts found matching your criteria.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
