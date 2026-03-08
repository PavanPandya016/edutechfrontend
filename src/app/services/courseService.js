import { api } from './api/api';

// Normalize backend Course to the shape the UI expects
const normalizeCourse = (course) => {
  if (!course) return null;
  return {
    ...course,
    id: course._id || course.id,
    image: course.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
    isPaid: course.courseType === 'paid',
    price: course.price ?? 0,
    category: course.category || 'General',
    level: course.level
      ? course.level.charAt(0).toUpperCase() + course.level.slice(1)
      : 'All Levels',
    rating: course.rating || 4.5,
    students: course.enrollmentCount || 0,
    duration: course.duration || 'Self-paced',
  };
};

/**
 * Service for course-related operations.
 */
export const courseService = {
  /**
   * Fetches all courses from the API.
   * @async
   * @returns {Promise<Array>}
   */
  getCourses: async () => {
    try {
      const data = await api.get('/courses');
      return (data.courses || []).map(normalizeCourse);
    } catch (error) {
      console.error('Error in courseService.getCourses:', error);
      throw error;
    }
  },

  /**
   * Fetches featured courses.
   */
  getFeaturedCourses: async () => {
    try {
      const data = await api.get('/courses/featured');
      return (data.courses || []).map(normalizeCourse);
    } catch (error) {
      console.error('Error in courseService.getFeaturedCourses:', error);
      throw error;
    }
  },

  /**
   * Fetches a single course by ID.
   * @param {string} id
   */
  getCourseById: async (id) => {
    try {
      const data = await api.get(`/courses/${id}`);
      return data.course || null;
    } catch (error) {
      console.error('Error in courseService.getCourseById:', error);
      throw error;
    }
  },

  /**
   * Enrolls the current user in a course.
   * @param {string} id
   */
  enrollInCourse: async (id) => {
    try {
      const data = await api.post(`/courses/${id}/enroll`, {});
      return data.enrollment || data;
    } catch (error) {
      console.error('Error in courseService.enrollInCourse:', error);
      throw error;
    }
  },

  /**
   * Fetches courses the current user is enrolled in.
   */
  getMyCourses: async () => {
    try {
      const data = await api.get('/courses/my/courses');
      return data.enrollments || [];
    } catch (error) {
      console.error('Error in courseService.getMyCourses:', error);
      throw error;
    }
  },

  /**
   * Fetches all categories from the CategoryTag model.
   * @returns {Promise<Array<{_id: string, name: string, slug: string}>>}
   */
  getCategories: async () => {
    try {
      const data = await api.get('/categories');
      return data.categories || [];
    } catch (error) {
      console.error('Error in courseService.getCategories:', error);
      throw error;
    }
  }
};

export default courseService;
