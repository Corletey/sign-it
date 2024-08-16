// src/services/finalAssessment.js
import { apiClient } from "./config";

export const apiGetAllFinalAssessments = async () => {
    return apiClient.get("/finalAssesment");
};

export const apiGetFinalAssessmentById = async (id) => {
    return apiClient.get(`/finalAssesment/${id}`);
};

export const apiCreateFinalAssessment = async (payload) => {
    return apiClient.post("/finalAssesment", payload);
};

export const apiUpdateFinalAssessment = async (id, payload) => {
    return apiClient.patch(`/finalAssesment/${id}`, payload);
};

export const apiDeleteFinalAssessment = async (id) => {
    return apiClient.delete(`/finalAssesment/${id}`);
};
