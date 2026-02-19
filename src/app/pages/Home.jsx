import { Link } from "react-router";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import svgPaths from "../../imports/svg-30sy7rkhfr.ts";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  const heroImg1 = `https://picsum.photos/seed/hero1/500/500`;
  const heroImg2 = `https://picsum.photos/seed/hero2/500/500`;
  const ctaImg = `https://picsum.photos/seed/cta/500/500`;

  const popularCourses = [
    {
      id: 1,
      title: "UI/UX Design Masterclass",
      category: "Design",
      price: "$ 500",
      rating: 5,
      reviews: 15,
      image: `https://picsum.photos/seed/course1/400/250`,
    },
    {
      id: 2,
      title: "Full Stack Development",
      category: "Development",
      price: "$ 500",
      rating: 5,
      reviews: 20,
      image: `https://picsum.photos/seed/course2/400/250`,
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      category: "Marketing",
      price: "$ 500",
      rating: 4,
      reviews: 102,
      image: `https://picsum.photos/seed/course3/400/250`,
    },
    {
      id: 4,
      title: "Data Science Essentials",
      category: "Data Science",
      price: "$ 500",
      rating: 5,
      reviews: 89,
      image: `https://picsum.photos/seed/course4/400/250`,
    },
  ];

  const categories = [
    { name: "Design", icon: "bi-palette" },
    { name: "Development", icon: "bi-code-slash" },
    { name: "Marketing", icon: "bi-graph-up" },
    { name: "Business", icon: "bi-briefcase" },
    { name: "Lifestyle", icon: "bi-stars" },
    { name: "Photography", icon: "bi-camera" },
    { name: "Music", icon: "bi-music-note" },
    { name: "Data Science", icon: "bi-bar-chart" },
  ];

  const instructors = [
    { id: 1, name: "Sarah Jones", title: "UI/UX Design Expert", image: `https://picsum.photos/seed/instructor1/200/200` },
    { id: 2, name: "Michael Chen", title: "Social Media Expert", image: `https://picsum.photos/seed/instructor2/200/200` },
    { id: 3, name: "Emily Davis", title: "Business Idea Expert", image: `https://picsum.photos/seed/instructor3/200/200` },
    { id: 4, name: "David Wilson", title: "Photography Expert", image: `https://picsum.photos/seed/instructor4/200/200` },
    { id: 5, name: "Jessica Brown", title: "Music Production Expert", image: `https://picsum.photos/seed/instructor5/200/200` },
  ];

  // Star SVG Component using Figma paths
  const StarIcon = ({ filled = true }) => (
    <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path
        d={svgPaths.p13af1300}
        fill={filled ? "#FFC27A" : "#E7E9EB"}
      />
    </svg>
  );

  // Decorative Star Four Component
  const StarFourDecor = () => (
    <motion.div
      className="absolute"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-10 h-10" fill="none" preserveAspectRatio="none" viewBox="0 0 41.6987 41.6987">
        <path d={svgPaths.p391de800} fill="#FFC27A" />
      </svg>
    </motion.div>
  );

  return (
    <div className="bg-white flex flex-col min-h-screen overflow-hidden">
      <Header />

      {/* Hero Section */}
      <div className="bg-[#fffaf5] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-[34px] top-[20px] w-[10px] h-[10px]">
          <svg className="block w-full h-full" fill="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="#ED4459" r="5" />
          </svg>
        </div>
        <div className="absolute left-[753px] top-[30px] w-[12px] h-[12px]">
          <svg className="block w-full h-full" fill="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="#6D39E9" r="6" />
          </svg>
        </div>
        <div className="absolute right-[100px] top-[40px] w-[15px] h-[15px]">
          <svg className="block w-full h-full" fill="none" viewBox="0 0 15 15">
            <circle cx="7.5" cy="7.5" fill="#FFC27A" r="7.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-[#06213d] space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block bg-white px-6 py-3 rounded-full font-['Public_Sans:SemiBold',sans-serif] text-[14px] text-[#14627a] shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                START TO SUCCESS
              </motion.div>

              <motion.h1
                className="font-['Public_Sans:SemiBold',sans-serif] text-[40px] sm:text-[48px] lg:text-[56px] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Access To{" "}
                <motion.span
                  className="text-[#14627a]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  5000+
                </motion.span>{" "}
                Courses
                <br />
                from <span className="text-[#14627a]">300</span> Instructors
                <br />& Institutions
              </motion.h1>

              <motion.p
                className="font-['Public_Sans:Regular',sans-serif] text-[18px] md:text-[20px] text-[#6d737a]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Various versions have evolved over the years, sometimes by accident,
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="What do want to learn?"
                  className="flex-1 px-6 py-4 rounded-lg font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a] bg-white focus:outline-none focus:ring-2 focus:ring-[#14627a] shadow-sm"
                />
                <motion.button
                  className="bg-[#14627a] text-white px-8 py-4 rounded-lg font-['Public_Sans:Medium',sans-serif] text-[16px] flex items-center justify-center gap-2"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(20, 98, 122, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi-search text-lg"></i>
                  Search
                </motion.button>
              </motion.div>



            </motion.div>

            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -rotate-5 z-10"
                  style={{
                    left: "0%",
                    top: "0%",
                    width: "50%",
                  }}
                  whileHover={{ rotate: -2, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={heroImg1}
                    alt="UI/UX Design Course"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </motion.div>
                <motion.div
                  className="absolute rotate-4 z-20"
                  style={{
                    right: "0%",
                    top: "5%",
                    width: "48%",
                  }}
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={heroImg2}
                    alt="Social Media Marketing"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </motion.div>
              </div>
              <div className="h-[400px]"></div>
            </motion.div>
          </div>
        </div>

        {/* Decorative sparkle */}
        <div className="absolute left-[240px] top-[40px]">
          <svg className="w-9 h-9" fill="none" viewBox="0 0 36 36">
            <path d={svgPaths.p3e54a732} fill="#0F4A63" />
            <path
              d="M24.75 2.25V9"
              stroke="#0F4A63"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
            <path
              d="M28.125 5.625H21.375"
              stroke="#0F4A63"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
            <path
              d="M31.5 10.125V14.625"
              stroke="#0F4A63"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
            <path
              d="M33.75 12.375H29.25"
              stroke="#0F4A63"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
          </svg>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(235,243,255,0.7)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center mb-8">
            {/* Title on the left */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[40px] md:text-[48px] lg:text-[56px] text-[#06213d] leading-tight">
                Most <br />
                <span className="text-[#14627a]">Popular</span> <br />
                Course
              </h2>
            </motion.div>

            {/* Cards container - horizontal scroll */}
            <div className="flex-1 w-full overflow-hidden">
              <motion.div
                className="flex gap-6 pb-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {popularCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    className="flex-shrink-0 w-[320px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/course/${course.id}`} className="block">
                      <motion.div
                        className="bg-white rounded-2xl overflow-hidden h-full"
                        style={{
                          boxShadow: "0px 3px 12px 0px rgba(75,75,75,0.08)",
                        }}
                        whileHover={{
                          y: -10,
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Category badge on image */}
                          <div className="absolute top-4 left-4">
                            <span className="inline-block bg-white px-3 py-1.5 rounded-md font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#1b1d1f] shadow-sm">
                              {course.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-['Public_Sans:Medium',sans-serif] text-[18px] text-[#363a3d] mb-3 overflow-hidden text-ellipsis whitespace-nowrap">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} filled={i < course.rating} />
                              ))}
                            </div>
                            <span className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#52565c]">
                              ({course.reviews})
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] text-[#1b1d1f]">
                              {course.price}
                            </span>
                            <motion.div
                              className={`p-2.5 rounded-lg ${index === 1
                                ? "bg-[#14627a] shadow-[-4px_4px_20px_0px_rgba(32,180,134,0.12)]"
                                : "bg-white shadow-[0px_3px_12px_0px_rgba(75,75,75,0.08)]"
                                }`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M6 18L18 6"
                                  stroke={index === 1 ? "white" : "#6D737A"}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="M8.25 6H18V15.75"
                                  stroke={index === 1 ? "white" : "#6D737A"}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Carousel Controls */}
          <motion.div
            className="flex items-center justify-center gap-8 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Dots */}
            <div className="flex gap-3">
              {[0, 1, 2, 3, 4].map((dot) => (
                <div
                  key={dot}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${dot === 0 ? "bg-[#14627a] w-8" : "bg-[#cfd3d6]"
                    }`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-3">
              <motion.button
                className="bg-white p-2.5 rounded-lg shadow-sm border border-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15 19.5L7.5 12L15 4.5"
                    stroke="#363A3D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </motion.button>
              <motion.button
                className="bg-[#14627a] p-2.5 rounded-lg shadow-[-4px_4px_20px_0px_rgba(32,180,134,0.12)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 4.5L16.5 12L9 19.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] md:text-[40px] text-[#06213d] mb-4">
              Most <span className="text-[#14627a]">Popular</span> Categories
            </h2>
            <p className="font-['Public_Sans:Regular',sans-serif] text-[18px] md:text-[20px] text-[#6d737a]">
              Various versions have evolved over the years, sometimes by accident,
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-lg p-6 cursor-pointer flex items-center justify-between"
                style={{
                  boxShadow: "0px 3px 12px 0px rgba(75,75,75,0.08)",
                  border: "1px solid transparent",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 0 1px #14627a, 0px 10px 30px 0px rgba(75,75,75,0.15)",
                }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 text-[#6d737a] group-hover:text-[#14627a]">
                    <i className={`${category.icon} text-2xl`}></i>
                  </div>
                  <span className="font-['Public_Sans:Medium',sans-serif] text-[20px] transition-colors duration-200 text-[#1b1d1f] group-hover:text-[#14627a]">
                    {category.name}
                  </span>
                </div>

                <div className="flex items-center justify-center w-11 h-11 rounded-lg p-2.5 transition-colors duration-200 bg-white shadow-[0px_3px_12px_0px_rgba(75,75,75,0.08)] group-hover:bg-[#14627a]">
                  <svg
                    className="w-6 h-6 text-[#6D737A] group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 18L18 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.25 6H18V15.75"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Instructors */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(235,243,255,0.7)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] md:text-[40px] text-[#06213d] mb-4">
              Our Best <span className="text-[#14627a]">Instructor</span>
            </h2>
            <p className="font-['Public_Sans:Regular',sans-serif] text-[18px] md:text-[20px] text-[#6d737a]">
              Various versions have evolved over the years, Sometimes by accident
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-4 mb-4"
                  style={{
                    boxShadow: "0px 3px 12px 0px rgba(75,75,75,0.08)",
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 bg-[#ececec]">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-['Public_Sans:Regular',sans-serif] text-[20px] text-[#1b1d1f] mb-1.5">
                    {instructor.name}
                  </h3>
                  <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a]">
                    {instructor.title}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[rgba(235,243,255,0.7)] overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute left-[10%] top-[50%] w-5 h-5">
          <svg className="block w-full h-full" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="#14627A" r="10" />
          </svg>
        </div>
        <div className="absolute left-[25%] top-[10%] w-[18px] h-[18px]">
          <svg className="block w-full h-full" fill="none" viewBox="0 0 18 18">
            <circle cx="9" cy="9" fill="#F9475D" r="9" />
          </svg>
        </div>
        <div className="absolute right-[15%] bottom-[20%] w-12 h-12">
          <svg className="block w-full h-full" fill="none" viewBox="0 0 48 48">
            <circle cx="24" cy="24" fill="#6D39E9" r="24" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative border-2 border-[#0f4a63] rounded-[70px] p-8 overflow-hidden">
                <img
                  src={ctaImg}
                  alt="Student learning"
                  className="rounded-[70px] w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <StarFourDecor />
              </div>
            </motion.div>

            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] md:text-[40px] text-[#06213d] leading-tight">
                  Join <span className="text-[#14627a]">World's largest</span> learning
                  platform today
                </h2>
                <p className="font-['Public_Sans:Regular',sans-serif] text-[20px] md:text-[24px] text-[#06213d]">
                  Start learning by registering for free
                </p>
              </div>

              <motion.button
                className="bg-[#14627a] text-white px-6 py-3 rounded-lg font-['Public_Sans:Medium',sans-serif] text-[16px]"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(20, 98, 122, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up for Free
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}