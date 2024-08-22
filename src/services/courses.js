// src/services/courses.js
import { apiClient } from "./config";

export const apiAddCourse = async (payload) => {
    return apiClient.post("/tutorials/course", payload);
};

export const apiGetCourseById = async (id) => {
    return apiClient.get(`/tutorials/course${id}`);
};

export const apiGetAllCourses = async () => {
    return apiClient.get("/tutorials/course");
};

export const apiUpdateCourse = async (id, payload) => {
    return apiClient.patch(`/tutorials/course${id}`, payload);
};

export const apiDeleteCourse = async (id) => {
    return apiClient.delete(`/tutorials/course${id}`);
};
