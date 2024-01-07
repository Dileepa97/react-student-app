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

  // Get not allocated subjects by teacher ID
  async getnotAllocatedSubjectsByTeacherId(id) {
    try {
      const url = `/api/Teacher/not-allocated-subjects/${id}`;
      const response = await this.api.get(url);
      return response.data;
    } catch (error) {
      console.error("Error getting not allocated subjects data:", error);
      throw error;
    }
  }

  // Get allocated subjects by teacher ID
  async getAllocatedSubjectsByTeacherId(id) {
    try {
      const url = `/api/Teacher/allocated-subjects/${id}`;
      const response = await this.api.get(url);
      return response.data;
    } catch (error) {
      console.error("Error getting allocated subjects data:", error);
      throw error;
    }
  }

  // Allocate a subject to a teacher
  async allocateSubject(data) {
    try {
      const url = `/api/Teacher/allocate-subject`;
      const response = await this.api.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Error allocating a subject:", error);
      throw error;
    }
  }

  // Deallocate a subject from a teacher
  async deallocateSubject(teacherId, subjectId) {
    try {
      const url = `/api/Teacher/${teacherId}/deallocate-subject/${subjectId}`;
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      console.error("Error deallocating a subject:", error);
      throw error;
    }
  }

  // Get not allocated classrooms by teacher ID
  async getnotAllocatedClassRoomsByTeacherId(id) {
    try {
      const url = `/api/Teacher/not-allocated-classrooms/${id}`;
      const response = await this.api.get(url);
      return response.data;
    } catch (error) {
      console.error("Error getting not allocated classrooms data:", error);
      throw error;
    }
  }

  // Get allocated classrooms by teacher ID
  async getAllocatedClassRoomsByTeacherId(id) {
    try {
      const url = `/api/Teacher/allocated-classrooms/${id}`;
      const response = await this.api.get(url);
      return response.data;
    } catch (error) {
      console.error("Error getting allocated classrooms data:", error);
      throw error;
    }
  }

  // Allocate a classroom to a teacher
  async allocateClassRoom(data) {
    try {
      const url = `/api/Teacher/allocate-classroom`;
      const response = await this.api.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Error allocating a classroom:", error);
      throw error;
    }
  }

  // Deallocate a classroom from a teacher
  async deallocateClassRooms(teacherId, subjectId) {
    try {
      const url = `/api/Teacher/${teacherId}/deallocate-classroom/${subjectId}`;
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      console.error("Error deallocating a classroom:", error);
      throw error;
    }
  }
}

export default TeacherApi;
