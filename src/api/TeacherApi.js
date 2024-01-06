import axios from "axios";

class TeacherApi {
  constructor() {
    this.apiBaseURL = process.env.REACT_APP_STUDENT_APP_API_BASE_URI;
    this.api = axios.create({
      baseURL: this.apiBaseURL,
    });
  }

  // Create a new Teacher
  async createTeacher(data) {
    try {
      const response = await this.api.post("/api/Teacher", data);
      return response.data;
    } catch (error) {
      console.error("Error creating Teacher:", error);
      throw error;
    }
  }

  // Get all Teachers
  async getAllTeachers() {
    try {
      const response = await this.api.get("/api/Teacher");
      return response.data;
    } catch (error) {
      console.error("Error getting Teachers:", error);
      throw error;
    }
  }

  // Get a Teacher by ID
  async getTeacherById(id) {
    try {
      const response = await this.api.get(`/api/Teacher/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error getting Teacher by ID:", error);
      throw error;
    }
  }

  // Update a Teacher by ID
  async updateTeacher(id, data) {
    try {
      const response = await this.api.put(`/api/Teacher/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating Teacher:", error);
      throw error;
    }
  }

  // Delete a Teacher by ID
  async deleteTeacher(id) {
    try {
      const response = await this.api.delete(`/api/Teacher/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting Teacher:", error);
      throw error;
    }
  }
}

export default TeacherApi;
