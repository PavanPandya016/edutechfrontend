import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

// ─── Constants ────────────────────────────────────────────────────────────────

const picsum = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const HERO_IMAGES = {
  hero1: picsum("hero1", 500, 500),
  hero2: picsum("hero2", 500, 500),
  cta: picsum("cta", 500, 500),
};

const POPULAR_COURSES = [
  { id: 1, title: "UI/UX Design Masterclass", category: "Design", price: 500, rating: 5, reviews: 15, image: picsum("course1", 400, 250) },
  { id: 2, title: "Full Stack Development", category: "Development", price: 500, rating: 5, reviews: 20, image: picsum("course2", 400, 250) },
  { id: 3, title: "Digital Marketing Pro", category: "Marketing", price: 500, rating: 4, reviews: 102, image: picsum("course3", 400, 250) },
  { id: 4, title: "Data Science Essentials", category: "Data Science", price: 500, rating: 5, reviews: 89, image: picsum("course4", 400, 250) },
];

const CATEGORIES = [
  { name: "Design", icon: "bi-palette" },
  { name: "Development", icon: "bi-code-slash" },
  { name: "Marketing", icon: "bi-graph-up" },
  { name: "Business", icon: "bi-briefcase" },
  { name: "Lifestyle", icon: "bi-stars" },
  { name: "Photography", icon: "bi-camera" },
  { name: "Music", icon: "bi-music-note" },
  { name: "Data Science", icon: "bi-bar-chart" },
];

const INSTRUCTORS = [
  { id: 1, name: "Sarah Jones", specialty: "UI/UX Design", image: picsum("instructor1", 200, 200) },
  { id: 2, name: "Michael Chen", specialty: "Social Media", image: picsum("instructor2", 200, 200) },
  { id: 3, name: "Emily Davis", specialty: "Business Strategy", image: picsum("instructor3", 200, 200) },
  { id: 4, name: "David Wilson", specialty: "Photography", image: picsum("instructor4", 200, 200) },
  { id: 5, name: "Jessica Brown", specialty: "Music Production", image: picsum("instructor5", 200, 200) },
];

// ─── Reusable UI ──────────────────────────────────────────────────────────────

function StarIcon({ filled }) {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill={filled ? "#FFC27A" : "#E7E9EB"} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
  );
}

function ArrowUpRightIcon({ color = "#6D737A" }) {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 18L18 6" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M8.25 6H18V15.75" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function SpinningStarDecor({ className = "" }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <svg className="w-10 h-10" viewBox="0 0 42 42" fill="#FFC27A">
        <path d="M21 0C21 11.598 11.598 21 0 21C11.598 21 21 30.402 21 42C21 30.402 30.402 21 42 21C30.402 21 21 11.598 21 0Z" />
      </svg>
    </motion.div>
  );
}

function DecorCircle({ color, size, style }) {
  return (
    <div className="absolute pointer-events-none" style={style} aria-hidden="true">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
      </svg>
    </div>
  );
}

function CarouselControls({ page, pageCount, onPrev, onNext, onGoTo }) {
  return (
    <motion.div
      className="flex items-center justify-center gap-8 mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex gap-3" role="tablist" aria-label="Carousel pages">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === page}
            aria-label={`Go to page ${i + 1}`}
            onClick={() => onGoTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === page ? "bg-[#14627a] w-8" : "bg-[#cfd3d6] w-2.5"
              }`}
          />
        ))}
      </div>

      <div className="flex gap-3">
        <motion.button
          onClick={onPrev}
          aria-label="Previous"
          className="bg-white p-2.5 rounded-lg shadow-sm border border-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 19.5L7.5 12L15 4.5" stroke="#363A3D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </motion.button>

        <motion.button
          onClick={onNext}
          aria-label="Next"
          className="bg-[#14627a] p-2.5 rounded-lg shadow-[-4px_4px_20px_0px_rgba(32,180,134,0.12)]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 4.5L16.5 12L9 19.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Section Components ───────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-[#fffaf5] relative overflow-hidden" aria-label="Hero">
      <DecorCircle color="#ED4459" size={10} style={{ left: 34, top: 20 }} />
      <DecorCircle color="#6D39E9" size={12} style={{ left: 753, top: 30 }} />
      <DecorCircle color="#FFC27A" size={15} style={{ right: 100, top: 40 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Copy */}
          <motion.div
            className="text-[#06213d] space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block bg-white px-6 py-3 rounded-full text-sm font-semibold text-[#14627a] shadow-sm tracking-widest"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            >
              START TO SUCCESS
            </motion.span>

            <motion.h1
              className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold leading-tight"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              Access To{" "}
              <motion.span
                className="text-[#14627a]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                
                5,000+
                
              </motion.span>{" "}
              Courses
              <br />from <span className="text-[#14627a]">300</span> Instructors
              <br />& Institutions
            </motion.h1>

            <motion.p
              className="text-[18px] md:text-[20px] text-[#6d737a]"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              Learn at your own pace with world-class instructors and institutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="hero-search" className="sr-only">Search for a course</label>
              <input
                id="hero-search"
                type="search"
                placeholder="What do you want to learn?"
                className="flex-1 px-6 py-4 rounded-lg text-[16px] text-[#6d737a] bg-white focus:outline-none focus:ring-2 focus:ring-[#14627a] shadow-sm"
              />
              <motion.button
                className="bg-[#14627a] text-white px-8 py-4 rounded-lg text-[16px] font-medium flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(20,98,122,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi-search text-lg" aria-hidden="true" />
                Search
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            className="hidden lg:block relative h-[400px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-hidden="true"
          >
            <motion.img
              src={HERO_IMAGES.hero1}
              alt=""
              className="absolute rounded-lg shadow-2xl w-[50%] -rotate-5 z-10"
              style={{ left: "0%", top: "0%" }}
              whileHover={{ rotate: -2, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={HERO_IMAGES.hero2}
              alt=""
              className="absolute rounded-lg shadow-2xl w-[48%] rotate-4 z-20"
              style={{ right: "0%", top: "5%" }}
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, index, highlighted = false }) {
  const { id, title, category, price, rating, reviews, image } = course;
  return (
    <motion.div
      className="flex-shrink-0 w-[320px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/course/${id}`} className="block h-full" aria-label={`View ${title}`}>
        <motion.article
          className="bg-white rounded-2xl overflow-hidden h-full"
          style={{ boxShadow: "0px 3px 12px 0px rgba(75,75,75,0.08)" }}
          whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-52 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
            <span className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-md text-sm font-medium text-[#1b1d1f] shadow-sm">
              {category}
            </span>
          </div>

          <div className="p-5">
            <h3 className="text-[18px] font-medium text-[#363a3d] mb-3 truncate">{title}</h3>

            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={rating} />
              <span className="text-[16px] text-[#52565c]">({reviews})</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[24px] font-semibold text-[#1b1d1f]">
                ${price.toLocaleString()}
              </span>
              <motion.div
                className={`p-2.5 rounded-lg ${highlighted
                  ? "bg-[#14627a] shadow-[-4px_4px_20px_0px_rgba(32,180,134,0.12)]"
                  : "bg-white shadow-[0px_3px_12px_0px_rgba(75,75,75,0.08)]"
                  }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-hidden="true"
              >
                <ArrowUpRightIcon color={highlighted ? "white" : "#6D737A"} />
              </motion.div>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

// …existing code…

function PopularCoursesSection() {
  const pageCount = POPULAR_COURSES.length;
  // start at 0 (first card); you can initialise to 1 if you want the second card
  // to be highlighted on first render.
  const [page, setPage] = useState(0);

  const ITEM_WIDTH = 320 + 24; // card width + gap-6 (1.5rem = 24px)

  const prev = useCallback(
    () => setPage((p) => (p - 1 + pageCount) % pageCount),
    [pageCount]
  );
  const next = useCallback(
    () => setPage((p) => (p + 1) % pageCount),
    [pageCount]
  );
  const goTo = useCallback((i) => setPage(i), []);

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(235,243,255,0.7)]"
      aria-labelledby="popular-courses-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center mb-8">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="popular-courses-heading"
              className="text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-[#06213d] leading-tight"
            >
              Most <br />
              <span className="relative text-[#14627a] inline-block">
                Popular
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFC27A] rounded-sm" />
              </span>{" "}
              <br />
              Course
            </h2>
          </motion.div>

          <div className="flex-1 w-full overflow-hidden relative">
            <motion.div
              className="flex gap-6 pb-4"
              style={{ x: -page * ITEM_WIDTH }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              initial={false}
              role="list"
            >
              {POPULAR_COURSES.map((course, index) => (
                <div key={course.id} role="listitem">
                  <CourseCard
                    course={course}
                    index={index}
                    highlighted={index === page}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <CarouselControls
          page={page}
          pageCount={pageCount}
          onPrev={prev}
          onNext={next}
          onGoTo={goTo}
        />
      </div>
    </section>
  );
}

// …existing code…

function CategoriesSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="categories-heading" className="text-[32px] md:text-[40px] font-semibold text-[#06213d] mb-4">
            Most <span className="text-[#14627a]">Popular</span> Categories
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#6d737a]">
            Explore topics taught by world-class instructors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((category, index) => (
            <motion.button
              key={category.name}
              aria-label={`Browse ${category.name} courses`}
              className="group w-full bg-white rounded-lg p-6 flex items-center justify-between cursor-pointer border border-transparent"
              initial={{
                y: 0,
                boxShadow: "0px 3px 12px 0px rgba(75,75,75,0.08)",
                borderColor: "transparent"
              }}
              whileHover={{
                y: -5,
                boxShadow: "0px 10px 30px 0px rgba(75,75,75,0.15)",
                borderColor: "#14627a"            // border turns teal
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="flex items-center gap-4">
                <i
                  className={`${category.icon} text-2xl text-[#6d737a]
                     transition-colors duration-100 group-hover:text-[#14627a]`}
                  aria-hidden="true"
                />
                <span
                  className="text-[20px] font-medium text-[#1b1d1f]
                     transition-colors duration-100 group-hover:text-[#14627a]"
                >
                  {category.name}
                </span>
              </div>
              <div
                className="flex items-center justify-center w-11 h-11 rounded-lg p-2.5
                   bg-white text-[#6d737a] shadow-[0px_3px_12px_0px_rgba(75,75,75,0.08)]
                   transition-colors duration-100 group-hover:bg-[#14627a]
                   group-hover:text-white"
                aria-hidden="true"
              >
                <ArrowUpRightIcon color="currentColor" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstructorsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(235,243,255,0.7)]" aria-labelledby="instructors-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="instructors-heading" className="text-[32px] md:text-[40px] font-semibold text-[#06213d] mb-4">
            Our Best <span className="text-[#14627a]">Instructors</span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#6d737a]">
            Learn from industry leaders who are passionate about teaching.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {INSTRUCTORS.map((instructor, index) => (
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
                style={{ boxShadow: "0px 3px 12px 0px rgba(75,75,75,0.08)" }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 bg-[#ececec]">
                  <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-[18px] font-normal text-[#1b1d1f] mb-1">{instructor.name}</h3>
                <p className="text-[14px] text-[#6d737a]">{instructor.specialty} Expert</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[rgba(235,243,255,0.7)] overflow-hidden" aria-labelledby="cta-heading">
      <DecorCircle color="#14627A" size={20} style={{ left: "10%", top: "50%" }} />
      <DecorCircle color="#F9475D" size={18} style={{ left: "25%", top: "10%" }} />
      <DecorCircle color="#6D39E9" size={48} style={{ right: "15%", bottom: "20%" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-2 border-[#0f4a63] rounded-[70px] p-8 overflow-hidden">
              <img src={HERO_IMAGES.cta} alt="Student learning online" className="rounded-[70px] w-full h-full object-cover" />
            </div>
            <SpinningStarDecor className="-right-8 top-1/2 -translate-y-1/2" />
          </motion.div>

          {/* Copy */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="cta-heading" className="text-[32px] md:text-[40px] font-semibold text-[#06213d] leading-tight">
              Join <span className="text-[#14627a]">the world's largest</span> learning platform today
            </h2>
            <p className="text-[20px] md:text-[24px] text-[#06213d]">
              Start learning by registering for free
            </p>
            <motion.a
              href="/signup"
              className="inline-block bg-[#14627a] text-white px-8 py-4 rounded-lg text-[16px] font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(20,98,122,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up for Free
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-white flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <PopularCoursesSection />
        <CategoriesSection />
        <InstructorsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}