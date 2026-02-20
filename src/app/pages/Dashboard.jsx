import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Student');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    // Get user info
    const name = localStorage.getItem('userName') || localStorage.getItem('userEmail')?.split('@')[0] || 'Student';
    const email = localStorage.getItem('userEmail') || '';
    setUserName(name);
    setUserEmail(email);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'Introduction to Kubernetes',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZGFzaGJvYXJkJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcxMzM4NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      instructor: 'spongebob',
      lessons: 24,
      completedLessons: 18
    },
    {
      id: 2,
      title: 'Artificial Intelligence Fundamentals',
      progress: 45,
      image: 'https://images.unsplash.com/photo-1762330917920-141e05d4eb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3NzEzMzg2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      instructor: 'spongebob',
      lessons: 32,
      completedLessons: 14
    },
    {
      id: 3,
      title: 'Data Science Bootcamp',
      progress: 20,
      image: 'https://images.unsplash.com/photo-1759052063465-0877c85f2c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmVzcyUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MTMzODYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      instructor: 'spongebob',
      lessons: 40,
      completedLessons: 8
    }
  ];

  const stats = [
    { label: 'Enrolled Courses', value: '3', icon: '📚' },
    { label: 'Completed', value: '1', icon: '✅' },
    { label: 'In Progress', value: '2', icon: '⏳' },
    { label: 'Certificates', value: '1', icon: '🏆' }
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 bg-gradient-to-br from-[#f8f9fa] to-[#e7f3f5] px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="font-['Public_Sans:Bold',sans-serif] text-[28px] md:text-[36px] text-[#14627a] mb-2">
                  Welcome back, {userName}! 👋
                </h1>
                <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a]">
                  {userEmail}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-[#e7e9eb] text-[#363a3d] px-6 py-3 rounded-lg font-['Public_Sans:Medium',sans-serif] text-[14px] md:text-[16px] hover:bg-[#d1d5d9] transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-[32px] md:text-[40px] mb-2">{stat.icon}</div>
                <div className="font-['Public_Sans:Bold',sans-serif] text-[24px] md:text-[32px] text-[#14627a] mb-1">
                  {stat.value}
                </div>
                <div className="font-['Public_Sans:Regular',sans-serif] text-[12px] md:text-[14px] text-[#6d737a]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* My Courses Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] md:text-[28px] text-[#1b1d1f]">
                My Courses
              </h2>
              <Link
                to="/courses"
                className="font-['Public_Sans:Medium',sans-serif] text-[14px] md:text-[16px] text-[#14627a] hover:underline"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl border border-[#e7e9eb] overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02]">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-['Public_Sans:SemiBold',sans-serif] text-[12px] text-[#14627a]">
                      {course.progress}% Complete
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-['Public_Sans:SemiBold',sans-serif] text-[18px] text-[#1b1d1f] mb-3">
                      {course.title}
                    </h3>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-['Public_Sans:Regular',sans-serif] text-[12px] text-[#6d737a]">
                          Progress
                        </span>
                        <span className="font-['Public_Sans:SemiBold',sans-serif] text-[12px] text-[#14627a]">
                          {course.completedLessons}/{course.lessons} lessons
                        </span>
                      </div>
                      <div className="w-full bg-[#e7e9eb] rounded-full h-2">
                        <div
                          className="bg-[#14627a] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#e7e9eb]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#ffc27a] rounded-full flex items-center justify-center font-['Public_Sans:SemiBold',sans-serif] text-[12px] text-white">
                          {course.instructor[0].toUpperCase()}
                        </div>
                        <span className="font-['Public_Sans:Regular',sans-serif] text-[12px] text-[#6d737a]">
                          {course.instructor}
                        </span>
                      </div>
                      <Link
                        to={`/course/${course.id}`}
                        className="bg-[#14627a] text-white px-4 py-2 rounded-lg font-['Public_Sans:Medium',sans-serif] text-[12px] hover:bg-[#0f4a5b] transition-colors"
                      >
                        Continue
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] md:text-[28px] text-[#1b1d1f] mb-6">
              Recent Activity
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#f8f9fa] rounded-lg">
                <div className="bg-[#14627a] text-white p-3 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['Public_Sans:Medium',sans-serif] text-[16px] text-[#1b1d1f] mb-1">
                    Completed Lesson: Docker Containers
                  </p>
                  <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                    2 hours ago
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#f8f9fa] rounded-lg">
                <div className="bg-[#ffc27a] text-white p-3 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['Public_Sans:Medium',sans-serif] text-[16px] text-[#1b1d1f] mb-1">
                    Enrolled in Data Science Bootcamp
                  </p>
                  <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                    Yesterday
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#f8f9fa] rounded-lg">
                <div className="bg-[#14627a] text-white p-3 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['Public_Sans:Medium',sans-serif] text-[16px] text-[#1b1d1f] mb-1">
                    Earned Certificate: Introduction to Kubernetes
                  </p>
                  <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                    3 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}