import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import svgPaths from "../../imports/svg-bu925ghury";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogDetail() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Blog Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="font-['Public_Sans:SemiBold',sans-serif] text-3xl sm:text-4xl lg:text-[48px] lg:leading-[60px] bg-gradient-to-r from-[#101828] via-[#1e2939] to-[#101828] bg-clip-text text-transparent mb-4">
            Why Most React Developers Fail Those Simple Interview
            Questions Even Know the Answers
          </h1>
          <div className="flex items-center gap-3">
            <span className="font-['Merriweather:Regular',sans-serif] text-sm text-[#4a5565]">
              Aug 1, 2025
            </span>
            <div className="bg-[#99a1af] rounded-full size-1" />
            <span className="font-['Merriweather:Regular',sans-serif] text-sm text-[#4a5565]">
              7 min read
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
            src="https://www.techmagic.co/blog/content/images/2024/07/cover-React-1.png"
            alt="Blog Hero"
            className="w-full max-w-[880px] mx-auto rounded-xl sm:rounded-[14px] shadow-lg"
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
            <div className="absolute bg-gradient-to-r from-[#9810fa] to-[#e60076] rounded-full size-[68px] blur-[8px] opacity-50" />
            <img
              src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE1ODE3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Spongebob"
              className="relative rounded-full size-[64px] shadow-[0px_0px_0px_4px_white,0px_10px_15px_-3px_rgba(0,0,0,0.1)] object-cover"
            />
          </div>
          <div>
            <p className="font-['Merriweather:Bold',sans-serif] text-lg text-[#101828]">
              Spongebob
            </p>
            <p className="font-['Roboto:Regular',sans-serif] text-sm text-[#4a5565]">
              Technical Writer
            </p>
          </div>
        </motion.div>

        {/* Table of Contents */}
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
            {[
              { label: "1. What is React", section: "section1" },
              { label: "2. How to learn React", section: "section2" },
              { label: "3. Why React is easy", section: "section3" }
            ].map((item) => (
              <li
                key={item.section}
                onClick={() => {
                  const el = document.querySelector(`[data-section="${item.section}"]`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`group relative flex flex-col cursor-pointer rounded-lg transition-all duration-200 overflow-hidden
                  ${activeSection === item.section ? 'bg-[#eaf4f7]' : 'hover:bg-[#f4fafc]'}`}
              >
                {/* Left active bar */}
                <span
                  className={`absolute left-0 top-0 h-full w-[4px] rounded-r-full transition-all duration-300
                    ${activeSection === item.section
                      ? 'bg-[#14627a] opacity-100'
                      : 'bg-[#14627a] opacity-0 group-hover:opacity-40'}`}
                />
                <span
                  className={`pl-5 pr-4 py-3 font-['Merriweather:Regular',sans-serif] text-base sm:text-lg transition-all duration-200
                    ${activeSection === item.section
                      ? 'text-[#14627a] font-semibold translate-x-1'
                      : 'text-[#364153] group-hover:text-[#14627a] group-hover:translate-x-1'}`}
                >
                  {item.label}
                </span>
                {/* Animated underline */}
                <span
                  className={`block h-[2px] bg-[#14627a] rounded-full mx-5 transition-all duration-300 origin-left
                    ${activeSection === item.section
                      ? 'scale-x-100 opacity-100 mb-2'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60 mb-2'}`}
                />
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#fffbeb] to-[#fff7ed] border-l-4 border-[#ff9b00] rounded-tr-2xl rounded-br-2xl p-6 sm:p-8 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] mb-10 sm:mb-12"
        >
          <p className="font-['Roboto:Medium',sans-serif] text-lg sm:text-2xl text-[#364153] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui diam arcu
            pharetra at laoreet pellentesque. Imperdiet sit ut ornare nulla risus id fames
            nascetur urna. Eros in neque tincidunt.
          </p>
        </motion.div>

        {/* Blog Content Sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-8 mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="font-['Roboto:Regular',sans-serif] text-lg sm:text-xl text-[#364153] leading-relaxed"
          >
            Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat in. Et
            nulla a magna amet, amet. Sodales malesuada laoreet bibendum neque amet turpis non.
            Ac arcu lacus turpis elementum imperdiet. Euismod purus, libero scelerisque vitae,
            libero fermentum urna, nunc.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-['Roboto:Regular',sans-serif] text-lg sm:text-xl text-[#364153] leading-relaxed"
          >
            Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus malesuada et ac
            vulputate. Aenean lacinia suspendisse et mattis adipiscing id dictum commodo nunc.
          </motion.p>

          {/* Section 1 */}
          <motion.div
            variants={fadeInUp}
            data-section="section1"
            className="pt-8 space-y-4 sm:space-y-6 scroll-mt-24"
          >
            <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-2xl sm:text-4xl text-black">
              1. What is React
            </h2>
            <p className="font-['Roboto:Regular',sans-serif] text-lg sm:text-xl text-[#364153] leading-relaxed">
              Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate donec enim
              sed ornare scelerisque. Sollicitudin orci leo egestas fermentum platea a imperdiet nisl.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            variants={fadeInUp}
            data-section="section2"
            className="pt-8 space-y-4 sm:space-y-6 scroll-mt-24"
          >
            <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-2xl sm:text-4xl bg-gradient-to-r from-[#155dfc] to-[#0092b8] bg-clip-text text-transparent">
              2. How to learn React
            </h2>
            <p className="font-['Roboto:Regular',sans-serif] text-lg sm:text-xl text-[#364153] leading-relaxed">
              Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate donec enim
              sed ornare scelerisque. Sollicitudin orci leo egestas fermentum platea a imperdiet nisl.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            variants={fadeInUp}
            data-section="section3"
            className="pt-8 space-y-4 sm:space-y-6 scroll-mt-24"
          >
            <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-2xl sm:text-4xl bg-gradient-to-r from-[#009966] to-[#009689] bg-clip-text text-transparent">
              3. Why React is easy
            </h2>
            <p className="font-['Roboto:Regular',sans-serif] text-lg sm:text-xl text-[#364153] leading-relaxed">
              Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate donec enim
              sed ornare scelerisque. Sollicitudin orci leo egestas fermentum platea a imperdiet nisl.
            </p>
          </motion.div>
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
                    className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                      suggestion.type === "article"
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
          className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-lg border border-gray-100"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="relative flex-shrink-0">
              <div className="absolute bg-gradient-to-r from-[#9810fa] to-[#e60076] rounded-full size-24 blur-[12px] opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE1ODE3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Spongebob"
                className="relative rounded-full size-24 shadow-xl object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-['Merriweather:Regular',sans-serif] text-2xl sm:text-3xl text-[#101828] mb-4">
                Written by Spongebob
              </h3>
              <p className="font-['Roboto:Regular',sans-serif] text-base sm:text-lg text-[#4a5565] leading-relaxed mb-6">
                Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices molestie
                bibendum. Purus orci nisl, commodo ipsum, ut urna, elementum.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: svgPaths.p2276e2c0, color: "#1877F2" },
                  { icon: svgPaths.p4926900, color: "#E4405F" },
                  { icon: svgPaths.p30498500, color: "#0A66C2" }
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-100 hover:bg-[#14627a] p-3 rounded-lg transition-colors group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill={social.color}>
                      <path d={social.icon} className="group-hover:fill-white transition-colors" />
                    </svg>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 