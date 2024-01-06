import axios from "axios";

class ClassRoomApi {
  constructor() {
    this.apiBaseURL = process.env.REACT_APP_STUDENT_APP_API_BASE_URI;
    this.api = axios.create({
      baseURL: this.apiBaseURL,
    });
  }

  // Create a new classroom
  async createClassRoom(data) {
    try {
      const response = await this.api.post("/api/ClassRoom", data);
      return response.data;
    } catch (error) {
      console.error("Error creating classroom:", error);
      throw error;
    }
  }

  // Get all classrooms
  async getAllClassRooms() {
    try {
      const response = await this.api.get("/api/ClassRoom");
      return response.data;
    } catch (error) {
      console.error("Error getting classrooms:", error);
      throw error;
    }
  }

  // Get a classroom by ID
  async getClassRoomById(id) {
    try {
      const response = await this.api.get(`/api/ClassRoom/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error getting classroom by ID:", error);
      throw error;
    }
  }

  // Update a classroom by ID
  async updateClassRoom(id, data) {
    try {
      const response = await this.api.put(`/api/ClassRoom/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating classroom:", error);
      throw error;
    }
  }

  // Delete a classroom by ID
  async deleteClassRoom(id) {
    try {
      const response = await this.api.delete(`/api/ClassRoom/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting classroom:", error);
      throw error;
    }
  }
}

export default ClassRoomApi;
