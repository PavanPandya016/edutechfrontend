import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#14627a] to-[#0183AB] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white font-semibold leading-tight mb-4"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            ABOUT EDUTECH
          </h1>
          <p
            className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-3"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            Bridging the gap between academic knowledge and industry readiness.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
         

          <div className="text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] text-[#1b1d1f] font-semibold mb-5 leading-snug"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              The Most Innovative Way to Empower Next-Gen Talent
            </h2>
            <div
              className="text-sm sm:text-base md:text-[18px] lg:text-[20px] text-[#6d737a] leading-relaxed space-y-4 max-w-3xl mx-auto"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              <p>
                At Tejeel Innovations LLP, our vision is to bridge the gap between academic knowledge and industry
                readiness. We are committed to providing scalable, future-focused training programs that empower
                students, professionals, and institutions through cutting-edge technologies like AI, Robotics, IoT, and
                Data Science.
              </p>
              <p>
                Since our inception in 2021, we've helped thousands of learners across India build the skills they need
                to thrive in the modern workforce. Our mission is deeply rooted in making tech education accessible,
                affordable, and application-oriented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <div className="border-y border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '2021', label: 'Founded' },
            { value: '10K+', label: 'Learners Trained' },
            { value: '50+', label: 'College Partners' },
            { value: '4', label: 'Tech Domains' },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-2xl sm:text-3xl font-bold text-[#0183AB]"
                style={{ fontFamily: "'Public Sans', sans-serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs sm:text-sm text-[#6d737a] mt-1"
                style={{ fontFamily: "'Public Sans', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <section className="bg-[#f8f9fa] py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#e8f5f9] flex items-center justify-center">
              <svg className="w-6 h-6 text-[#0183AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <h2
              className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] text-[#1b1d1f] font-semibold mb-5"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              Mission
            </h2>
            <div
              className="text-sm sm:text-base md:text-[18px] lg:text-[20px] text-[#6d737a] leading-relaxed space-y-4 max-w-3xl mx-auto"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              <p>
                To deliver world-class tech education through real-world projects, expert mentorship, and AI-driven
                learning platforms — enabling learners to transform knowledge into innovation.
              </p>
              <p>
                We aim to become India's leading ed-tech ecosystem where talent meets technology for the betterment of
                industries ranging from manufacturing to fintech and healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-[36px] text-center text-[#1b1d1f] font-semibold mb-10"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
          >
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Innovation',
                desc: 'We constantly evolve our curriculum to reflect the latest industry trends and technologies.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                ),
              },
              {
                title: 'Accessibility',
                desc: 'Quality tech education should be within reach for every aspiring learner across India.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
              },
              {
                title: 'Impact',
                desc: 'Every program we design is outcome-driven, focused on real-world employability and growth.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#e8f5f9] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#0183AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {item.icon}
                  </svg>
                </div>
                <h3
                  className="text-[#1b1d1f] font-semibold text-base sm:text-lg mb-2"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#6d737a] text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}