import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import svgPaths from '../../imports/svg-go1x4xx39u';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Components ---

function ArrowRightLine() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-right-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_3339)" id="arrow-right-line">
          <path d={svgPaths.p39c35b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_3339">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EventCard({ month, day, title, time, location, bgColor }) {
  return (
    <motion.div
      layout
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className={`${bgColor} w-full rounded-[25px] overflow-hidden shadow-lg cursor-pointer`}
    >
      <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
        <div className="font-['Public_Sans:Bold',sans-serif] font-bold text-[36px] sm:text-[44px] md:text-[48px] text-white tracking-[0.36px]">
          <p className="leading-[1]">{month}</p>
        </div>
        <div className="font-['Public_Sans:Bold',sans-serif] font-bold text-[44px] sm:text-[52px] md:text-[55px] text-white">
          <p className="leading-[1]">{day}</p>
        </div>
        <div className="font-['Public_Sans:ExtraBold',sans-serif] font-extrabold text-[26px] sm:text-[32px] md:text-[38px] text-white tracking-[0.08px]">
          <p className="leading-[1.1]">{title}</p>
        </div>
        <div className="flex items-end justify-between gap-2 pt-1">
          <div className="flex flex-col">
            <span className="font-['Public_Sans:Bold',sans-serif] font-bold text-[15px] sm:text-[18px] md:text-[20px] text-white leading-[2]">
              {time}
            </span>
            <span className="font-['Public_Sans:Bold',sans-serif] font-bold text-[15px] sm:text-[18px] md:text-[20px] text-white leading-[2]">
              {location}
            </span>
          </div>
          <div className="mb-1 shrink-0">
            <ArrowRightLine />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Workshop() {
  const [filter, setFilter] = useState('all');

  const events = [
    { id: 1, month: 'Feb', day: '4', title: 'Artificial Intelligence', time: '15:00 - 17:00', location: 'Gujarat university', bgColor: 'bg-[#14627a]', type: 'upcoming' },
    { id: 2, month: 'Feb', day: '4', title: 'Artificial Intelligence', time: '15:00 - 17:00', location: 'Gujarat university', bgColor: 'bg-[#6fa7b8]', type: 'upcoming' },
    { id: 3, month: 'Feb', day: '4', title: 'Artificial Intelligence', time: '15:00 - 17:00', location: 'Gujarat university', bgColor: 'bg-[#14627a]', type: 'upcoming' },
    { id: 4, month: 'Jan', day: '12', title: 'Robotics Workshop', time: '10:00 - 12:00', location: 'Ahmedabad IT Park', bgColor: 'bg-[#6fa7b8]', type: 'past' },
    { id: 5, month: 'Jan', day: '15', title: 'Cloud Computing', time: '14:00 - 16:00', location: 'Tejeel HQ', bgColor: 'bg-[#14627a]', type: 'past' },
    { id: 6, month: 'Dec', day: '28', title: 'Cyber Security', time: '11:00 - 13:00', location: 'Online Webinar', bgColor: 'bg-[#6fa7b8]', type: 'past' },
  ];

  const displayed = filter === 'all' ? events : events.filter(e => e.type === filter);

  return (
    <div className="bg-white flex flex-col min-h-screen overflow-x-hidden">
      <Header />

      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-br from-[#f8f9fa] to-[#e7f3f5] py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1 
            variants={fadeInUp}
            className="font-['DM_Serif_Text:Regular',sans-serif] text-[38px] sm:text-[56px] md:text-[72px] lg:text-[80px] text-[#2e7e96] leading-tight mb-4 sm:mb-6"
          >
            Our Events
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="font-['Public_Sans:Regular',sans-serif] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#6d737a] leading-relaxed max-w-4xl mx-auto"
          >
            Our recent event was a great success, bringing together industry leaders and
            professionals to explore the latest trends and innovations. It featured keynote
            sessions, panel discussions, and hands-on workshops, providing valuable
            insights and networking opportunities. The event concluded with a Q&amp;A session,
            fostering meaningful discussions and collaborations.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Filter Toggle ── */}
      <div className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="inline-flex p-1.5 bg-gray-100 rounded-[20px] border border-gray-200">
            {['all', 'upcoming', 'past'].map((opt) => {
              const isActive = filter === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={`relative px-6 sm:px-8 py-2.5 rounded-[15px] text-sm md:text-base font-semibold transition-colors duration-300 focus:outline-none ${
                    isActive ? 'text-white' : 'text-[#6d737a] hover:text-[#14627a]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-[#14627a] rounded-[15px] shadow-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">
                    {opt === 'all' ? 'All Events' : opt}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Events Grid ── */}
      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto min-h-[400px]">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {displayed.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ── CTA Section ── */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#14627a] to-[#0183AB] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 mt-auto"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[40px] text-white leading-tight mb-4 sm:mb-6"
          >
            Don't Miss Our Upcoming Events
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="font-['Public_Sans:Regular',sans-serif] text-[14px] sm:text-[16px] md:text-[18px] text-white/90 mb-8 sm:mb-10"
          >
            Register now to secure your spot and be part of our vibrant learning community
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#ffd194" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffc27a] text-[#14627a] px-10 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-[16px] sm:text-[18px] transition-all shadow-xl"
          >
            Register for Events
          </motion.button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}