import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function BlogDetail() {
  const { id } = useParams();

  // Mock blog post data - in real app, fetch based on id
  const post = {
    id: id,
    title: 'Why Most React Developers Fail Those Simple Interview Questions Even Know the Answers',
    excerpt: 'A deep dive into common React interview pitfalls and how to avoid them',
    content: `
      <p>React has become one of the most popular JavaScript libraries for building user interfaces, and as a result, React interviews have become increasingly common. However, many developers who are proficient in React find themselves struggling with seemingly simple interview questions.</p>

      <h2>The Problem</h2>
      <p>The issue isn't necessarily a lack of knowledge. Most React developers can build complex applications, implement state management, and optimize performance. Yet, when faced with basic interview questions, they often stumble.</p>

      <h2>Common Pitfalls</h2>
      <h3>1. Understanding vs. Explanation</h3>
      <p>Many developers understand React concepts intuitively but struggle to articulate them clearly. For example, they might know how to use useEffect, but find it difficult to explain the dependency array or cleanup functions in simple terms.</p>

      <h3>2. Practical Experience vs. Theoretical Knowledge</h3>
      <p>Building applications is different from understanding the underlying principles. Interview questions often test theoretical knowledge that you might not encounter in day-to-day development.</p>

      <h3>3. The Pressure Factor</h3>
      <p>Interview pressure can cause even experienced developers to second-guess themselves. Simple questions become complicated when you're being evaluated.</p>

      <h2>How to Prepare</h2>
      <h3>1. Practice Explaining Concepts</h3>
      <p>Don't just know how to use React features—practice explaining them to others. This helps solidify your understanding and improves your communication skills.</p>

      <h3>2. Study the Fundamentals</h3>
      <p>Go back to basics. Review the React documentation, focusing on sections you might have skimmed over initially. Understanding the "why" behind React's design decisions is crucial.</p>

      <h3>3. Mock Interviews</h3>
      <p>Practice with peers or use online platforms for mock interviews. This helps reduce anxiety and improves your ability to think clearly under pressure.</p>

      <h2>Key Takeaways</h2>
      <p>Success in React interviews requires more than just coding skills. You need to:</p>
      <ul>
        <li>Understand concepts at a deep level</li>
        <li>Communicate clearly and confidently</li>
        <li>Handle pressure effectively</li>
        <li>Bridge the gap between practical and theoretical knowledge</li>
      </ul>

      <h2>Conclusion</h2>
      <p>If you've struggled with React interview questions despite being a capable developer, you're not alone. The key is to recognize that interview success requires a different skill set than day-to-day development. By focusing on communication, theoretical understanding, and practice, you can significantly improve your interview performance.</p>
    `,
    author: {
      name: 'Sarah Johnson',
      bio: 'Senior React Developer with 8+ years of experience',
      avatar: 'SJ'
    },
    date: 'February 23, 2024',
    readTime: '8 min read',
    category: 'React',
    tags: ['React', 'JavaScript', 'Interviews', 'Career'],
    image: 'https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZGFzaGJvYXJkJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcxMzM4NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 12453,
    likes: 856
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Announcing Azure DevOps Server General Availability',
      image: 'https://images.unsplash.com/photo-1762330917920-141e05d4eb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3NzEzMzg2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Jun 23, 2024',
      readTime: '11 min read'
    },
    {
      id: 3,
      title: 'Boards integration with GitHub Copilot and feature',
      image: 'https://images.unsplash.com/photo-1759052063465-0877c85f2c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmVzcyUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3MTMzODYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Jun 23, 2024',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      {/* Hero Image */}
      <motion.div 
        className="relative h-[400px] md:h-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block bg-[#14627a] px-4 py-2 rounded-full font-['Public_Sans:SemiBold',sans-serif] text-[14px] text-white mb-4">
                {post.category}
              </span>
              <h1 className="font-['Public_Sans:Bold',sans-serif] text-[32px] md:text-[48px] text-white leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#ffc27a] rounded-full flex items-center justify-center">
                    <span className="font-['Public_Sans:SemiBold',sans-serif] text-[16px] text-white">
                      {post.author.avatar}
                    </span>
                  </div>
                  <span className="font-['Public_Sans:Medium',sans-serif] text-[16px]">
                    {post.author.name}
                  </span>
                </div>
                <span>•</span>
                <span className="font-['Public_Sans:Regular',sans-serif] text-[14px]">
                  {post.date}
                </span>
                <span>•</span>
                <span className="font-['Public_Sans:Regular',sans-serif] text-[14px]">
                  {post.readTime}
                </span>
                <span>•</span>
                <span className="font-['Public_Sans:Regular',sans-serif] text-[14px]">
                  {post.views.toLocaleString()} views
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            {/* Social Share Buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#e7e9eb]">
              <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8f9fa] hover:bg-[#e7e9eb] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-[#14627a]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                <span className="font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#1b1d1f]">
                  {post.likes}
                </span>
              </motion.button>
              
              <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8f9fa] hover:bg-[#e7e9eb] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-[#14627a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#1b1d1f]">
                  Share
                </span>
              </motion.button>

              <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8f9fa] hover:bg-[#e7e9eb] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-[#14627a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#1b1d1f]">
                  Save
                </span>
              </motion.button>
            </div>

            {/* Article Body */}
            <div 
              className="article-content font-['Public_Sans:Regular',sans-serif] text-[18px] text-[#363a3d] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                '& h2': {
                  fontSize: '32px',
                  fontWeight: '600',
                  color: '#1b1d1f',
                  marginTop: '48px',
                  marginBottom: '24px'
                },
                '& h3': {
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#1b1d1f',
                  marginTop: '32px',
                  marginBottom: '16px'
                },
                '& p': {
                  marginBottom: '24px',
                  lineHeight: '1.8'
                },
                '& ul, & ol': {
                  marginLeft: '24px',
                  marginBottom: '24px'
                },
                '& li': {
                  marginBottom: '12px'
                }
              }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#e7e9eb]">
              {post.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 rounded-full bg-[#f8f9fa] font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#6d737a] hover:bg-[#e7e9eb] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  #{tag}
                </motion.span>
              ))}
            </div>

            {/* Author Card */}
            <motion.div 
              className="mt-12 p-8 bg-[#f8f9fa] rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#14627a] to-[#6fa7b8] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-['Public_Sans:Bold',sans-serif] text-[24px] text-white">
                    {post.author.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-['Public_Sans:SemiBold',sans-serif] text-[20px] text-[#1b1d1f] mb-2">
                    {post.author.name}
                  </h3>
                  <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a] mb-4">
                    {post.author.bio}
                  </p>
                  <motion.button
                    className="px-6 py-2 rounded-lg bg-[#14627a] text-white font-['Public_Sans:Medium',sans-serif] text-[14px]"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(20, 98, 122, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Follow
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] text-[#1b1d1f] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/blog/${related.id}`}
                    className="block group"
                  >
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                      <ImageWithFallback
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-['Public_Sans:SemiBold',sans-serif] text-[20px] text-[#1b1d1f] mb-2 group-hover:text-[#14627a] transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-3 text-[#6d737a]">
                      <span className="font-['Public_Sans:Regular',sans-serif] text-[14px]">
                        {related.date}
                      </span>
                      <span>•</span>
                      <span className="font-['Public_Sans:Regular',sans-serif] text-[14px]">
                        {related.readTime}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-16">
            <h2 className="font-['Public_Sans:SemiBold',sans-serif] text-[32px] text-[#1b1d1f] mb-8">
              Comments (24)
            </h2>
            
            {/* Comment Form */}
            <div className="mb-8">
              <textarea
                placeholder="Add a comment..."
                className="w-full p-4 border border-[#e7e9eb] rounded-xl font-['Public_Sans:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#14627a] resize-none"
                rows="4"
              ></textarea>
              <motion.button
                className="mt-4 px-6 py-3 rounded-lg bg-[#14627a] text-white font-['Public_Sans:SemiBold',sans-serif] text-[16px]"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(20, 98, 122, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Post Comment
              </motion.button>
            </div>

            {/* Sample Comments */}
            {[1, 2, 3].map((comment) => (
              <div key={comment} className="border-t border-[#e7e9eb] pt-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14627a] to-[#6fa7b8] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-['Public_Sans:SemiBold',sans-serif] text-[16px] text-white">
                      U
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-['Public_Sans:SemiBold',sans-serif] text-[16px] text-[#1b1d1f]">
                        User Name
                      </h4>
                      <span className="font-['Public_Sans:Regular',sans-serif] text-[14px] text-[#6d737a]">
                        2 days ago
                      </span>
                    </div>
                    <p className="font-['Public_Sans:Regular',sans-serif] text-[16px] text-[#6d737a] mb-3">
                      Great article! This really helped me understand the common pitfalls in React interviews.
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#14627a] hover:underline">
                        Reply
                      </button>
                      <button className="font-['Public_Sans:Medium',sans-serif] text-[14px] text-[#6d737a] hover:text-[#14627a]">
                        👍 12
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
