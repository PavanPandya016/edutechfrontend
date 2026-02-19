import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store login state in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', formData.email);
    
    // Determine role based on email
    if (formData.email === 'admin@edutech.com') {
      localStorage.setItem('userRole', 'admin');
      localStorage.setItem('userName', 'Admin');
    } else {
      localStorage.setItem('userRole', 'student');
      localStorage.setItem('userName', formData.email.split('@')[0]);
    }
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="hidden lg:block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1721468184185-214871ec4411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcxMjk2NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Education"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right side - Login Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <h1 className="font-['Public_Sans:SemiBold',sans-serif] font-semibold text-[32px] md:text-[40px] text-[#14627a] leading-tight mb-4">
                Welcome Back
              </h1>
              <p className="font-['Public_Sans:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-[#6d737a] leading-relaxed">
                Login to access your courses and continue learning
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-[#14627a] border-[#e7e9eb] rounded focus:ring-[#14627a]" />
                  <span className="ml-2 font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">Remember me</span>
                </label>
                <Link to="/forgot-password" className="font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#14627a] hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#14627a] text-white px-6 py-4 rounded-lg font-['Public_Sans:SemiBold',sans-serif] text-[16px] hover:bg-[#0f4a5b] transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Login
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#6d737a]">
                Don't have an account?{' '}
                <Link to="/signup" className="font-['Public_Sans:SemiBold',sans-serif] text-[#14627a] hover:underline">
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}