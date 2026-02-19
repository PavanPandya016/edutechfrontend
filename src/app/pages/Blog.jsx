import { Link } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Why Most React Developers Fail Those Simple Interview Questions Even Know the Answers',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed.',
      date: 'Feb 23, 2021',
      readTime: '8 min read',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZGFzaGJvYXJkJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcxMzM4NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'spongebob'
    },
    {
      id: 2,
      title: 'Announcing Azure DevOps Server General Availability',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed.',
      date: 'Jun 23, 2021',
      readTime: '11 min read',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1762330917920-141e05d4eb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3NzEzMzg2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'spongebob'
    },
    {
      id: 3,
      title: 'Boards integration with GitHub Copilot and feature',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed.',
      date: 'Jun 23, 2021',
      readTime: '10 min read',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1759052063465-0877c85f2c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmVzcyUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MTMzODYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'spongebob'
    },
    {
      id: 4,
      title: 'DevOps and GitHub Repositories — Next Steps in the Path to Agentic AI',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed.',
      date: 'Jun 23, 2021',
      readTime: '11 min read',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBwYXR0ZXJufGVufDF8fHx8MTc3MTI4NjU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'spongebob'
    }
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e7f3f5] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-['Public_Sans:Bold',sans-serif] text-[40px] md:text-[56px] text-[#1b1d1f] leading-tight mb-4">
            Blog
          </h1>
          <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] md:text-[20px] text-[#6d737a] mb-8">
            A blog about Tech, Real-World task, and Latest news.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-2 flex items-center gap-2">
            <svg className="w-6 h-6 text-[#6d737a] ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search for articles"
              className="flex-1 px-4 py-3 font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#363a3d] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02]"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#14627a] px-3 py-1 rounded-full font-['Public_Sans:SemiBold',sans-serif] text-[12px] text-white">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[20px] md:text-[24px] text-[#1b1d1f] mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="font-['Public_Sans:Regular',sans-serif] text-[14px] md:text-[16px] text-[#6d737a] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#e7e9eb]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#ffc27a] rounded-full flex items-center justify-center font-['Public_Sans:SemiBold',sans-serif] text-[14px] text-white">
                        {post.author[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#1b1d1f]">
                          {post.author}
                        </p>
                        <p className="font-['Public_Sans:Regular',sans-serif] text-[12px] text-[#6d737a]">
                          {post.date} • {post.readTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {[1, 2, 3, 4, '...', 132].map((page, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-lg font-['Public_Sans:Medium',sans-serif] text-[14px] ${
                  page === 1
                    ? 'bg-[#14627a] text-white'
                    : 'bg-white text-[#6d737a] border border-[#e7e9eb] hover:border-[#14627a]'
                } transition-colors`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}