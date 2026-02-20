import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CourseDetail() {
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data - in real app, fetch based on id
  const course = {
    id: id,
    title: 'Introduction to Kubernetes',
    subtitle: 'Master container orchestration with hands-on projects',
    description: 'Learn Kubernetes from the ground up with this comprehensive course. You\'ll start with the basics of containerization and work your way up to deploying, managing, and scaling applications in production environments.',
    instructor: {
      name: 'Sarah Johnson',
      title: 'Senior DevOps Engineer',
      avatar: 'https://images.unsplash.com/photo-1568787613783-36e4112c16b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwdGVhY2hlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzEzMDEzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '10+ years of experience in cloud infrastructure and DevOps'
    },
    price: 500,
    originalPrice: 799,
    rating: 4.8,
    reviews: 2847,
    students: 15234,
    duration: '12 weeks',
    lectures: 156,
    level: 'Intermediate',
    language: 'English',
    lastUpdated: 'February 2024',
    image: 'https://images.unsplash.com/photo-1762329388386-22bf162a9368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsZWFybmluZyUyMGxlY3R1cmV8ZW58MXx8fHwxNzcxMzM5MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Development',
    tags: ['Kubernetes', 'DevOps', 'Docker', 'Cloud'],
    whatYouLearn: [
      'Deploy and manage Kubernetes clusters',
      'Understand Kubernetes architecture and components',
      'Configure networking and storage in Kubernetes',
      'Implement security best practices',
      'Scale applications automatically',
      'Monitor and troubleshoot Kubernetes deployments'
    ],
    requirements: [
      'Basic understanding of Docker and containers',
      'Familiarity with command line interface',
      'Basic knowledge of cloud computing concepts',
      'A computer with internet connection'
    ],
    curriculum: [
      {
        section: 'Getting Started with Kubernetes',
        lectures: 12,
        duration: '2h 30m',
        lessons: [
          'Introduction to Container Orchestration',
          'Kubernetes Architecture Overview',
          'Setting Up Your Development Environment',
          'Your First Kubernetes Cluster'
        ]
      },
      {
        section: 'Core Concepts',
        lectures: 24,
        duration: '5h 15m',
        lessons: [
          'Pods and Containers',
          'Deployments and ReplicaSets',
          'Services and Networking',
          'ConfigMaps and Secrets'
        ]
      },
      {
        section: 'Advanced Topics',
        lectures: 18,
        duration: '4h 45m',
        lessons: [
          'StatefulSets and DaemonSets',
          'Ingress Controllers',
          'Persistent Storage',
          'Helm Package Manager'
        ]
      }
    ]
  };

  const handleEnroll = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      window.location.href = '/login';
    } else {
      setIsEnrolled(true);
    }
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-[#14627a] to-[#0183AB] py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 text-white space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[#ffc27a] px-3 py-1 rounded-full font-['Public_Sans:SemiBold',sans-serif] text-[12px] text-[#14627a]">
                    {course.category}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full font-['Public_Sans:Medium',sans-serif] text-[12px]">
                    {course.level}
                  </span>
                </div>
                <h1 className="font-['Public_Sans:Bold',sans-serif] text-[32px] md:text-[48px] leading-tight mb-4">
                  {course.title}
                </h1>
                <p className="font-['Public_Sans:Regular',sans-serif] text-[18px] md:text-[20px] opacity-90">
                  {course.subtitle}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(course.rating) ? 'text-[#ffc27a]' : 'text-white/30'}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="font-['Public_Sans:SemiBold',sans-serif] text-[16px]">
                    {course.rating} ({course.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="font-['Public_Sans:Regular',sans-serif] text-[16px]">
                    {course.students.toLocaleString()} students
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ImageWithFallback
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-['Public_Sans:SemiBold',sans-serif] text-[16px]">
                    {course.instructor.name}
                  </p>
                  <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] opacity-80">
                    {course.instructor.title}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Enrollment Card - Desktop */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 sticky top-24">
                <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-['Public_Sans:Bold',sans-serif] text-[36px] text-[#14627a]">
                      ${course.price}
                    </span>
                    <span className="font-['Public_Sans:Regular',sans-serif] text-[20px] text-[#6d737a] line-through">
                      ${course.originalPrice}
                    </span>
                  </div>
                  <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                    ⏰ Limited time offer!
                  </p>
                </div>

                {!isEnrolled ? (
                  <motion.button
                    onClick={handleEnroll}
                    className="w-full bg-[#14627a] text-white py-4 rounded-lg font-['Public_Sans:SemiBold',sans-serif] text-[18px] mb-4"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(20, 98, 122, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enroll Now
                  </motion.button>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="font-['Public_Sans:SemiBold',sans-serif] text-[16px] text-green-700 text-center">
                      ✓ Enrolled Successfully!
                    </p>
                  </div>
                )}

                <div className="space-y-3 text-[14px]">
                  <div className="flex items-center justify-between">
                    <span className="font-['Public_Sans:Regular',sans-serif] text-[#6d737a]">
                      Duration
                    </span>
                    <span className="font-['Public_Sans:SemiBold',sans-serif] text-[#1b1d1f]">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Public_Sans:Regular',sans-serif] text-[#6d737a]">
                      Lectures
                    </span>
                    <span className="font-['Public_Sans:SemiBold',sans-serif] text-[#1b1d1f]">
                      {course.lectures}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Public_Sans:Regular',sans-serif] text-[#6d737a]">
                      Language
                    </span>
                    <span className="font-['Public_Sans:SemiBold',sans-serif] text-[#1b1d1f]">
                      {course.language}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Course Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="border-b border-[#e7e9eb] mb-8">
                <div className="flex gap-8">
                  {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                    <motion.button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 font-['Public_Sans:SemiBold',sans-serif] text-[16px] capitalize relative ${
                        activeTab === tab ? 'text-[#14627a]' : 'text-[#6d737a]'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#14627a]"
                          layoutId="activeTab"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] text-[#1b1d1f] mb-4">
                        Course Description
                      </h2>
                      <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a] leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    <div>
                      <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] text-[#1b1d1f] mb-4">
                        What You'll Learn
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.whatYouLearn.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <svg className="w-6 h-6 text-[#14627a] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a]">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[24px] text-[#1b1d1f] mb-4">
                        Requirements
                      </h2>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-[#14627a] mt-1">•</span>
                            <span className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a]">
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-4">
                    {course.curriculum.map((section, index) => (
                      <motion.div
                        key={index}
                        className="border border-[#e7e9eb] rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="bg-[#f8f9fa] px-6 py-4 flex items-center justify-between">
                          <h3 className="font-['Public_Sans:SemiBold',sans-serif] text-[18px] text-[#1b1d1f]">
                            {section.section}
                          </h3>
                          <span className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                            {section.lectures} lectures • {section.duration}
                          </span>
                        </div>
                        <div className="px-6 py-4 space-y-3">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex items-center gap-3">
                              <svg className="w-5 h-5 text-[#6d737a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a]">
                                {lesson}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="bg-white border border-[#e7e9eb] rounded-xl p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <ImageWithFallback
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-['Public_Sans:Bold',sans-serif] text-[24px] text-[#1b1d1f] mb-2">
                          {course.instructor.name}
                        </h3>
                        <p className="font-['Public_Sans:Medium',sans-serif] text-[16px] text-[#6d737a] mb-4">
                          {course.instructor.title}
                        </p>
                        <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a]">
                          {course.instructor.bio}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e7e9eb]">
                      <div className="text-center">
                        <p className="font-['Public_Sans:Bold',sans-serif] text-[24px] text-[#14627a]">
                          4.9
                        </p>
                        <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                          Rating
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-['Public_Sans:Bold',sans-serif] text-[24px] text-[#14627a]">
                          52K
                        </p>
                        <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                          Students
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="font-['Public_Sans:Bold',sans-serif] text-[24px] text-[#14627a]">
                          12
                        </p>
                        <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                          Courses
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="bg-[#f8f9fa] rounded-xl p-8 text-center">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="font-['Public_Sans:Bold',sans-serif] text-[48px] text-[#14627a]">
                          {course.rating}
                        </span>
                        <div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-[#ffc27a] text-[24px]">⭐</span>
                            ))}
                          </div>
                          <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                            Based on {course.reviews.toLocaleString()} reviews
                          </p>
                        </div>
                      </div>
                    </div>

                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border border-[#e7e9eb] rounded-xl p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#14627a] to-[#6fa7b8] rounded-full flex items-center justify-center">
                            <span className="font-['Public_Sans:SemiBold',sans-serif] text-[16px] text-white">
                              J
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-['Public_Sans:SemiBold',sans-serif] text-[16px] text-[#1b1d1f]">
                                John Doe
                              </h4>
                              <span className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                                2 weeks ago
                              </span>
                            </div>
                            <div className="flex mb-3">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-[#ffc27a]">⭐</span>
                              ))}
                            </div>
                            <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a]">
                              Excellent course! The instructor explains complex concepts in a very clear and understandable way. Highly recommended for anyone looking to learn Kubernetes.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Related Courses - Desktop */}
            <div className="hidden lg:block">
              <h3 className="font-['Public_Sans:SemiBold',sans-serif] text-[20px] text-[#1b1d1f] mb-6">
                Related Courses
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <Link
                    key={item}
                    to={`/course/${item}`}
                    className="block border border-[#e7e9eb] rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="h-32 bg-gradient-to-br from-[#14627a] to-[#6fa7b8]"></div>
                    <div className="p-4">
                      <h4 className="font-['Public_Sans:SemiBold',sans-serif] text-[16px] text-[#1b1d1f] mb-2">
                        Docker Fundamentals
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="font-['Public_Sans:Bold',sans-serif] text-[18px] text-[#14627a]">
                          $450
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-[#ffc27a]">⭐</span>
                          <span className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                            4.7
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Enrollment Bar */}
      <motion.div
        className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e7e9eb] p-4 shadow-lg z-40"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="font-['Public_Sans:Bold',sans-serif] text-[24px] text-[#14627a]">
              ${course.price}
            </span>
            <span className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a] line-through ml-2">
              ${course.originalPrice}
            </span>
          </div>
          {!isEnrolled ? (
            <motion.button
              onClick={handleEnroll}
              className="bg-[#14627a] text-white px-8 py-3 rounded-lg font-['Public_Sans:SemiBold',sans-serif] text-[16px]"
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
              <span className="font-['Public_Sans:SemiBold',sans-serif] text-[14px] text-green-700">
                ✓ Enrolled
              </span>
            </div>
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
