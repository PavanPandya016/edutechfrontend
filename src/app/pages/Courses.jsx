import { Link } from 'react-router';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    paid: false,
    free: false
  });

  const courses = [
    { id: 1, title: 'Introduction to Kubernetes', category: 'Development', price: 500, isFree: false, rating: 4.5, students: 1250 },
    { id: 2, title: 'UI/UX Design Fundamentals', category: 'Design', price: 0, isFree: true, rating: 4.8, students: 3200 },
    { id: 3, title: 'Digital Marketing Bootcamp', category: 'Marketing', price: 450, isFree: false, rating: 4.6, students: 980 },
    { id: 4, title: 'Data Science with Python', category: 'Data Science', price: 600, isFree: false, rating: 4.9, students: 2100 },
    { id: 5, title: 'Web Development Basics', category: 'Development', price: 0, isFree: true, rating: 4.4, students: 5600 },
    { id: 6, title: 'Photography Masterclass', category: 'Photography', price: 350, isFree: false, rating: 4.7, students: 890 }
  ];

  const handleFilterChange = (filter) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = (!selectedFilters.paid && !selectedFilters.free) ||
                         (selectedFilters.paid && !course.isFree) ||
                         (selectedFilters.free && course.isFree);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] md:text-[40px] text-[#1b1d1f] mb-6">
              Course Catalog
            </h1>

            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-2 flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-[#6d737a] ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#363a3d] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
                <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[20px] text-[#1b1d1f] mb-4">
                  Filters
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-['Public_Sans:Medium',sans-serif] text-[16px] text-[#1b1d1f] mb-3">
                      Price
                    </h3>
                    <label className="flex items-center gap-3 cursor-pointer mb-2">
                      <input
                        type="checkbox"
                        checked={selectedFilters.paid}
                        onChange={() => handleFilterChange('paid')}
                        className="w-4 h-4 text-[#14627a] border-[#e7e9eb] rounded focus:ring-[#14627a]"
                      />
                      <span className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                        Paid
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.free}
                        onChange={() => handleFilterChange('free')}
                        className="w-4 h-4 text-[#14627a] border-[#e7e9eb] rounded focus:ring-[#14627a]"
                      />
                      <span className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                        Free
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#e7e9eb]">
                    <h3 className="font-['Public_Sans:Medium',sans-serif] text-[16px] text-[#1b1d1f] mb-3">
                      Topic
                    </h3>
                    <div className="space-y-2">
                      {['Design', 'Development', 'Marketing', 'Business', 'Data Science'].map((topic) => (
                        <div key={topic} className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a] cursor-pointer hover:text-[#14627a]">
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/course/${course.id}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <div className="h-48 bg-gradient-to-br from-[#14627a] to-[#6fa7b8] relative">
                      {course.isFree && (
                        <div className="absolute top-4 right-4 bg-[#ffc27a] px-3 py-1 rounded-full font-['Public_Sans:SemiBold',sans-serif] text-[12px] text-white">
                          Free
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-white border border-[#e7e9eb] px-3 py-1 rounded-full font-['Public_Sans:Medium',sans-serif] text-[12px] text-[#6d737a]">
                          {course.category}
                        </span>
                      </div>
                      <h3 className="font-['Public_Sans:SemiBold',sans-serif] text-[18px] text-[#1b1d1f] mb-3">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(course.rating) ? 'text-[#ffc27a]' : 'text-[#e7e9eb]'}>
                              ⭐
                            </span>
                          ))}
                        </div>
                        <span className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                          {course.rating}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-[#e7e9eb]">
                        <div>
                          <span className="font-['Public_Sans:SemiBold',sans-serif] text-[20px] text-[#14627a]">
                            {course.isFree ? 'Free' : `$ ${course.price}`}
                          </span>
                          <p className="font-['Public_Sans:Regular',sans-serif] text-[12px] text-[#6d737a]">
                            {course.students} students
                          </p>
                        </div>
                        <button className="bg-[#14627a] text-white p-2 rounded-lg hover:bg-[#0f4a5b] transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}