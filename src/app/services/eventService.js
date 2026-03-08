import { api } from './api/api';

/**
 * Service for event/workshop-related operations.
 */
export const eventService = {
  getEvents: async () => {
    try {
      const data = await api.get('/events');
      return data.events || [];
    } catch (error) {
      console.error('Error in eventService.getEvents:', error);
      throw error;
    }
  },

  getFeaturedEvents: async () => {
    try {
      const data = await api.get('/events/featured');
      return data.events || [];
    } catch (error) {
      console.error('Error in eventService.getFeaturedEvents:', error);
      throw error;
    }
  },

  getEventById: async (id) => {
    try {
      const data = await api.get(`/events/${id}`);
      return data.event || null;
    } catch (error) {
      console.error('Error in eventService.getEventById:', error);
      throw error;
    }
  },

  registerForEvent: async (id) => {
    try {
      const data = await api.post(`/events/${id}/register`, {});
      return data.registration || data;
    } catch (error) {
      console.error('Error in eventService.registerForEvent:', error);
      throw error;
    }
  },

  getMyEvents: async () => {
    try {
      const data = await api.get('/events/my/events');
      return data.registrations || [];
    } catch (error) {
      console.error('Error in eventService.getMyEvents:', error);
      throw error;
    }
  }
};

export default eventService;
