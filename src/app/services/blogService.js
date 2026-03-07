// Blog Data Service - Centralized data management for blog posts
// All blog data is stored in localStorage and fetched from here

const BLOGS_STORAGE_KEY = 'eduTech_blogs';
const DEFAULT_BLOGS_KEY = 'eduTech_default_blogs';

// Default blog posts (system/admin blogs)
const defaultBlogs = [
  {
    id: 1,
    title: "Why Most React Developers Fail Those Simple Interview Questions Even Know the Answers",
    image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGxhcHRvcCUyMGNvZGV8ZW58MXx8fHwxNzcxNTk2ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Development",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    excerpt: "Dive deep into the common pitfalls that trip up even experienced React developers during technical interviews and learn how to avoid them.",
    author: "Sarah Johnson",
    isDefault: true
  },
  {
    id: 2,
    title: "Building Scalable Applications with Modern DevOps Practices",
    image: "https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc3MTU5Njg4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "DevOps",
    date: "Feb 14, 2026",
    readTime: "12 min read",
    excerpt: "Explore the latest DevOps methodologies and tools that are transforming how teams build, deploy, and maintain modern applications.",
    author: "Michael Chen",
    isDefault: true
  },
  {
    id: 3,
    title: "The Complete Guide to Web Performance Optimization",
    image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzE1MDQxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Performance",
    date: "Feb 13, 2026",
    readTime: "10 min read",
    excerpt: "Learn proven techniques to make your web applications lightning fast, from lazy loading to image optimization and beyond.",
    author: "Emily Rodriguez",
    isDefault: true
  },
  {
    id: 4,
    title: "Mastering Software Architecture in Distributed Systems",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTU5Njg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Architecture",
    date: "Feb 12, 2026",
    readTime: "15 min read",
    excerpt: "Understanding the principles and patterns that make distributed systems resilient, scalable, and maintainable in production.",
    author: "David Kim",
    isDefault: true
  },
  {
    id: 5,
    title: "Cloud Computing Trends Shaping the Future of Tech",
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NzE1MDYxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Cloud",
    date: "Feb 11, 2026",
    readTime: "9 min read",
    excerpt: "Discover how serverless, edge computing, and multi-cloud strategies are revolutionizing infrastructure and application deployment.",
    author: "Alex Thompson",
    isDefault: true
  },
  {
    id: 6,
    title: "Data Science Techniques for Real-World Business Problems",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzE1NTg2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Data Science",
    date: "Feb 10, 2026",
    readTime: "11 min read",
    excerpt: "Apply machine learning and statistical analysis to solve complex business challenges and drive data-driven decision making.",
    author: "Jessica Park",
    isDefault: true
  },
  {
    id: 7,
    title: "AI and Machine Learning: Beyond the Hype",
    image: "https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzcxNDk2OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "AI/ML",
    date: "Feb 9, 2026",
    readTime: "13 min read",
    excerpt: "A practical look at implementing AI solutions in production, including ethical considerations and real-world use cases.",
    author: "Robert Martinez",
    isDefault: true
  },
  {
    id: 8,
    title: "Cybersecurity Best Practices for Modern Applications",
    image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcxNTgxMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Security",
    date: "Feb 8, 2026",
    readTime: "10 min read",
    excerpt: "Essential security practices every developer should implement to protect applications from common vulnerabilities and threats.",
    author: "Lisa Anderson",
    isDefault: true
  },
  {
    id: 9,
    title: "Mobile-First Design: Creating Exceptional User Experiences",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzcxNTQ5ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Design",
    date: "Feb 7, 2026",
    readTime: "7 min read",
    excerpt: "Design principles and techniques for creating engaging mobile experiences that users love and come back to regularly.",
    author: "Tom Wilson",
    isDefault: true
  },
  {
    id: 10,
    title: "Startup Innovation: Lessons from Silicon Valley",
    image: "https://images.unsplash.com/photo-1733925457822-64c3e048fa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGlubm92YXRpb258ZW58MXx8fHwxNzcxNTk2ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Business",
    date: "Feb 6, 2026",
    readTime: "14 min read",
    excerpt: "Insights from successful tech entrepreneurs on building products, scaling teams, and navigating the startup ecosystem.",
    author: "Kevin Brown",
    isDefault: true
  }
];

// Initialize default blogs in localStorage if not already present
const initializeDefaultBlogs = () => {
  try {
    const storedDefaults = localStorage.getItem(DEFAULT_BLOGS_KEY);
    if (!storedDefaults) {
      localStorage.setItem(DEFAULT_BLOGS_KEY, JSON.stringify(defaultBlogs));
    }
  } catch (error) {
    console.error('Error initializing default blogs:', error);
  }
};

// Get all blogs (default + user-created)
export const getAllBlogs = () => {
  try {
    initializeDefaultBlogs();

    const defaultBlogsStored = JSON.parse(localStorage.getItem(DEFAULT_BLOGS_KEY) || '[]');
    const userBlogs = JSON.parse(localStorage.getItem(BLOGS_STORAGE_KEY) || '[]');

    // Combine and sort by date (newest first)
    const allBlogs = [...defaultBlogsStored, ...userBlogs];
    return allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

// Get a single blog by ID
export const getBlogById = (id) => {
  try {
    const allBlogs = getAllBlogs();
    return allBlogs.find(blog => blog.id === parseInt(id));
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    return null;
  }
};

// Add new blog
export const addBlog = (blogData) => {
  try {
    const userBlogs = JSON.parse(localStorage.getItem(BLOGS_STORAGE_KEY) || '[]');

    // Generate unique ID
    const newId = userBlogs.length > 0
      ? Math.max(...userBlogs.map(b => b.id)) + 1
      : 11;

    const newBlog = {
      ...blogData,
      id: newId,
      isPublished: blogData.isPublished !== false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    userBlogs.push(newBlog);
    localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(userBlogs));

    return newBlog;
  } catch (error) {
    console.error('Error adding blog:', error);
    return null;
  }
};

// Update existing blog
export const updateBlog = (blogId, updatedData) => {
  try {
    const userBlogs = JSON.parse(localStorage.getItem(BLOGS_STORAGE_KEY) || '[]');

    const index = userBlogs.findIndex(b => b.id === blogId);
    if (index !== -1) {
      userBlogs[index] = {
        ...userBlogs[index],
        ...updatedData,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(userBlogs));
      return userBlogs[index];
    }
    return null;
  } catch (error) {
    console.error('Error updating blog:', error);
    return null;
  }
};

// Delete blog
export const deleteBlog = (blogId) => {
  try {
    const userBlogs = JSON.parse(localStorage.getItem(BLOGS_STORAGE_KEY) || '[]');
    const filtered = userBlogs.filter(b => b.id !== blogId);
    localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting blog:', error);
    return false;
  }
};

// Search blogs
export const searchBlogs = (query = '', category = null) => {
  try {
    const allBlogs = getAllBlogs();

    return allBlogs.filter(blog => {
      const matchesSearch =
        query === '' ||
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        category === null || category === 'All' || blog.category === category;

      return matchesSearch && matchesCategory;
    });
  } catch (error) {
    console.error('Error searching blogs:', error);
    return [];
  }
};

// Get all categories
export const getCategories = () => {
  try {
    const allBlogs = getAllBlogs();
    const categories = new Set(allBlogs.map(blog => blog.category));
    return ['All', ...Array.from(categories)];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return ['All'];
  }
};

// Get user blogs only
export const getUserBlogs = () => {
  try {
    return JSON.parse(localStorage.getItem(BLOGS_STORAGE_KEY) || '[]');
  } catch (error) {
    console.error('Error fetching user blogs:', error);
    return [];
  }
};

// Clear all user blogs (admin only)
export const clearAllUserBlogs = () => {
  try {
    localStorage.removeItem(BLOGS_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing user blogs:', error);
    return false;
  }
};

// Export all blogs to a JSON file
export const exportBlogs = () => {
  try {
    const allBlogs = getAllBlogs();
    const dataStr = JSON.stringify(allBlogs, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = `edutech_blogs_backup_${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    return true;
  } catch (error) {
    console.error('Error exporting blogs:', error);
    return false;
  }
};

// Import blogs from JSON data
export const importBlogs = (jsonData) => {
  try {
    const blogsToImport = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
    if (!Array.isArray(blogsToImport)) throw new Error('Invalid format');

    // Simple validation: check if items have required fields
    const validBlogs = blogsToImport.filter(b => b.title && b.content);

    const existingUserBlogs = JSON.parse(localStorage.getItem(BLOGS_STORAGE_KEY) || '[]');

    // Add only blogs that aren't "default" to the user storage
    const newBlogs = validBlogs.filter(b => !b.isDefault);

    // Merge without duplicates (by title/author for simplicity if ID is missing)
    const merged = [...existingUserBlogs];
    newBlogs.forEach(nb => {
      if (!merged.find(m => m.id === nb.id)) {
        merged.push(nb);
      }
    });

    localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(merged));
    return true;
  } catch (error) {
    console.error('Error importing blogs:', error);
    return false;
  }
};

// Export blog service as default
export default {
  getAllBlogs,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
  searchBlogs,
  getCategories,
  getUserBlogs,
  clearAllUserBlogs,
  exportBlogs,
  importBlogs
};
