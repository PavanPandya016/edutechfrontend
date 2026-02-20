import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import svgPaths from '../../imports/svg-go1x4xx39u';

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
    <div className={`${bgColor} flex-1 min-w-[280px] rounded-[25px] overflow-hidden hover:scale-105 transition-transform`}>
      <div className="p-6 space-y-4">
        <div className="font-['Public_Sans:Bold',sans-serif] font-bold text-[48px] text-white tracking-[0.36px]">
          <p className="leading-[40px]">{month}</p>
        </div>
        <div className="font-['Public_Sans:Bold',sans-serif] font-bold text-[55px] text-white">
          <p className="leading-[48px]">{day}</p>
        </div>
        <div className="font-['Public_Sans:ExtraBold',sans-serif] font-extrabold text-[32px] md:text-[40px] text-white tracking-[0.08px]">
          <p className="leading-[32px]">{title}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-['Public_Sans:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-white">
              <p className="leading-[48px]">{time}</p>
            </div>
            <div className="font-['Public_Sans:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-white">
              <p className="leading-[48px]">{location}</p>
            </div>
          </div>
          <ArrowRightLine />
        </div>
      </div>
    </div>
  );
}

export default function Workshop() {
  const events = [
    { month: 'Feb', day: '4', title: 'Artificial Intelligence', time: '15:00 - 17:00', location: 'Gujarat university', bgColor: 'bg-[#14627a]' },
    { month: 'Feb', day: '4', title: 'Artificial Intelligence', time: '15:00 - 17:00', location: 'Gujarat university', bgColor: 'bg-[#6fa7b8]' },
    { month: 'Feb', day: '4', title: 'Artificial Intelligence', time: '15:00 - 17:00', location: 'Gujarat university', bgColor: 'bg-[#14627a]' },
    { month: 'Feb', day: '4', title: 'Artificial Intelligence', time: '15:00 - 17:00', location: 'Gujarat university', bgColor: 'bg-[#6fa7b8]' },
    { month: 'Feb', day: '4', title: 'Artificial Intelligence', time: '15:00 - 17:00', location: 'Gujarat university', bgColor: 'bg-[#14627a]' },
    { month: 'Feb', day: '4', title: 'Artificial Intelligence', time: '15:00 - 17:00', location: 'Gujarat university', bgColor: 'bg-[#6fa7b8]' }
  ];

  const [filter, setFilter] = useState('all');

  const upcomingEvents = events.slice(0, 3);
  const pastEvents = events.slice(3);

  let displayed = events;
  if (filter === 'upcoming') displayed = upcomingEvents;
  else if (filter === 'past') displayed = pastEvents;

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e7f3f5] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-['DM_Serif_Text:Regular',sans-serif] text-[48px] md:text-[80px] text-[#2e7e96] leading-tight mb-6">
            Our Events
          </h1>
          <div className="font-['Public_Sans:Regular',sans-serif] text-[16px] md:text-[20px] text-[#6d737a] leading-relaxed max-w-4xl mx-auto">
            <p>
              Our recent event was a great success, bringing together industry leaders and
              professionals to explore the latest trends and innovations. It featured keynote
              sessions, panel discussions, and hands-on workshops, providing valuable
              insights and networking opportunities. The event concluded with a Q&A session,
              fostering meaningful discussions and collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* Filter toggle */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          {['all', 'upcoming', 'past'].map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 first:rounded-l-lg last:rounded-r-lg border border-[#14627a] font-semibold text-sm sm:text-base transition-colors focus:outline-none ${
                filter === opt
                  ? 'bg-[#14627a] text-white'
                  : 'bg-white text-[#14627a] hover:bg-[#ecf8fb]'
              }`}
            >
              {opt === 'all'
                ? 'All Events'
                : opt === 'upcoming'
                ? 'Upcoming'
                : 'Past'}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid (filtered) */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#14627a] to-[#0183AB] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] md:text-[40px] text-white leading-tight mb-6">
            Don't Miss Our Upcoming Events
          </h2>
          <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] md:text-[18px] text-white/90 mb-8">
            Register now to secure your spot and be part of our vibrant learning community
          </p>
          <button className="bg-[#ffc27a] text-[#14627a] px-8 py-4 rounded-lg font-['Public_Sans:SemiBold',sans-serif] text-[16px] hover:bg-[#ffb65a] transition-all transform hover:scale-105 shadow-lg">
            Register for Events
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}