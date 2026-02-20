import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    // Store signup data
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', formData.fullName);
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userRole', 'student'); // New users are students by default
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Signup Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 order-2 lg:order-1">
            <div className="mb-8">
              <h1 className="font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[32px] md:text-[40px] text-[#14627a] leading-tight mb-4">
                Join eduTech
              </h1>
              <p className="font-['Public_Sans:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#6d737a] leading-relaxed">
                Start your learning journey today with 5000+ courses
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block font-['Public_Sans:Medium',sans-serif] font-medium text-[14px] md:text-[16px] text-[#1b1d1f] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e7e9eb] rounded-lg font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] focus:outline-none focus:ring-2 focus:ring-[#14627a] focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-['Public_Sans:Medium',sans-serif] font-medium text-[14px] md:text-[16px] text-[#1b1d1f] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e7e9eb] rounded-lg font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] focus:outline-none focus:ring-2 focus:ring-[#14627a] focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block font-['Public_Sans:Medium',sans-serif] font-medium text-[14px] md:text-[16px] text-[#1b1d1f] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e7e9eb] rounded-lg font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] focus:outline-none focus:ring-2 focus:ring-[#14627a] focus:border-transparent transition-all"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block font-['Public_Sans:Medium',sans-serif] font-medium text-[14px] md:text-[16px] text-[#1b1d1f] mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e7e9eb] rounded-lg font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#363a3d] focus:outline-none focus:ring-2 focus:ring-[#14627a] focus:border-transparent transition-all"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1 text-[#14627a] border-[#e7e9eb] rounded focus:ring-[#14627a]"
                />
                <label htmlFor="agreeToTerms" className="ml-2 font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                  I agree to the{' '}
                  <Link to="/terms" className="text-[#14627a] hover:underline">
                    Terms and Conditions
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-[#14627a] hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#14627a] text-white px-6 py-4 rounded-lg font-['Public_Sans:SemiBold',sans-serif] text-[16px] hover:bg-[#0f4a5b] transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Create Account
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#6d737a]">
                Already have an account?{' '}
                <Link to="/login" className="font-['Public_Sans:SemiBold',sans-serif] text-[#14627a] hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden lg:block order-1 lg:order-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBwYXR0ZXJufGVufDF8fHx8MTc3MTI4NjU3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Technology"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}