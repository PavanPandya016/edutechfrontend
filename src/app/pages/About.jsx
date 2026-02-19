import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#14627a] to-[#0183AB] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-['Public_Sans:SemiBold',sans-serif] text-[40px] md:text-[56px] text-white leading-tight mb-4">
            ABOUT EDUTECH
          </h1>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] md:text-[40px] text-[#1b1d1f] mb-6">
            The Most Innovative Way to Empower Next-Gen Talent
          </h2>
          <div className="font-['Public_Sans:Regular',sans-serif] text-[16px] md:text-[20px] text-[#6d737a] leading-relaxed space-y-4">
            <p>
              At Tejeel Innovations LLP, our vision is to bridge the gap between academic knowledge and industry
              readiness. We are committed to providing scalable, future-focused training programs that empower
              students, professionals, and institutions through cutting-edge technologies like AI, Robotics, IoT, and
              Data Science.
            </p>
            <p>
              Since our inception in 2021, we've helped thousands of learners across India build the
              skills they need to thrive in the modern workforce. Our mission is deeply rooted in making tech
              education accessible, affordable, and application-oriented.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-[#f8f9fa] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] md:text-[40px] text-[#1b1d1f] mb-6">
            Mission
          </h2>
          <div className="font-['Public_Sans:Regular',sans-serif] text-[16px] md:text-[20px] text-[#6d737a] leading-relaxed space-y-4">
            <p>
              To deliver world-class tech education through real-world projects, expert mentorship, and AI-driven
              learning platforms — enabling learners to transform knowledge into innovation.
            </p>
            <p>
              We aim to become
              India's leading ed-tech ecosystem where talent meets technology for the betterment of industries
              ranging from manufacturing to fintech and healthcare.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] md:text-[40px] text-[#1b1d1f] text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-[#e7e9eb] hover:shadow-xl transition-all">
              <div className="text-[48px] mb-4">💡</div>
              <h3 className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] text-[#1b1d1f] mb-3">
                Innovation
              </h3>
              <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a] leading-relaxed">
                We constantly evolve our curriculum to match the latest industry trends and technologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#e7e9eb] hover:shadow-xl transition-all">
              <div className="text-[48px] mb-4">🎯</div>
              <h3 className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] text-[#1b1d1f] mb-3">
                Excellence
              </h3>
              <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a] leading-relaxed">
                We maintain the highest standards in education delivery and student support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#e7e9eb] hover:shadow-xl transition-all">
              <div className="text-[48px] mb-4">🤝</div>
              <h3 className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] text-[#1b1d1f] mb-3">
                Accessibility
              </h3>
              <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a] leading-relaxed">
                We make quality education accessible and affordable for learners from all backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}