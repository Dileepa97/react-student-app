import axios from "axios";

class StudentApi {
  constructor() {
    this.apiBaseURL = process.env.REACT_APP_STUDENT_APP_API_BASE_URI;
    this.api = axios.create({
      baseURL: this.apiBaseURL,
    });
  }

  // Create a new Student
  async createStudent(data) {
    try {
      const response = await this.api.post("/api/Student", data);
      return response.data;
    } catch (error) {
      console.error("Error creating Student:", error);
      throw error;
    }
  }

  // Get all Students
  async getAllStudents() {
    try {
      const response = await this.api.get("/api/Student");
      return response.data;
    } catch (error) {
      console.error("Error getting Students:", error);
      throw error;
    }
  }

  // Get a Student by ID
  async getStudentById(id) {
    try {
      const response = await this.api.get(`/api/Student/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error getting Student by ID:", error);
      throw error;
    }
  }

  // Update a Student by ID
  async updateStudent(id, data) {
    try {
      const response = await this.api.put(`/api/Student/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating Student:", error);
      throw error;
    }
  }

  // Delete a Student by ID
  async deleteStudent(id) {
    try {
      const response = await this.api.delete(`/api/Student/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting Student:", error);
      throw error;
    }
  }

  // Get a Student report data by classroom ID
  async getStudentReportDataByClassRoomId(id) {
    try {
      const response = await this.api.get(`/api/Student/report-details/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error getting Student report data:", error);
      throw error;
    }
  }
}

export default StudentApi;
