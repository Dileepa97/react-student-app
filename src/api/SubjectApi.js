import axios from "axios";

class SubjectApi {
  constructor() {
    this.apiBaseURL = process.env.REACT_APP_STUDENT_APP_API_BASE_URI;
    this.api = axios.create({
      baseURL: this.apiBaseURL,
    });
  }

  // Create a new Subject
  async createSubject(data) {
    try {
      const response = await this.api.post("/api/Subject", data);
      return response.data;
    } catch (error) {
      console.error("Error creating Subject:", error);
      throw error;
    }
  }

  // Get all Subjects
  async getAllSubjects() {
    try {
      const response = await this.api.get("/api/Subject");
      return response.data;
    } catch (error) {
      console.error("Error getting Subjects:", error);
      throw error;
    }
  }

  // Get a Subject by ID
  async getSubjectById(id) {
    try {
      const response = await this.api.get(`/api/Subject/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error getting Subject by ID:", error);
      throw error;
    }
  }

  // Update a Subject by ID
  async updateSubject(id, data) {
    try {
      const response = await this.api.put(`/api/Subject/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating Subject:", error);
      throw error;
    }
  }

  // Delete a Subject by ID
  async deleteSubject(id) {
    try {
      const response = await this.api.delete(`/api/Subject/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting Subject:", error);
      throw error;
    }
  }
}

export default SubjectApi;
