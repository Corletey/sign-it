// src/services/intermediate.js
import { apiClient } from "./config";

export const apiGetAllIntermediateTutorials = async () => {
    return apiClient.get("/tutorials/intermediate");
};

export const apiGetIntermediateTutorialById = async (id) => {
    return apiClient.get(`/tutorials/intermediate/${id}`);
};

export const apiCreateIntermediateTutorial = async (payload) => {
    return apiClient.post("/tutorials/intermediate", payload);
};

export const apiUpdateIntermediateTutorial = async (id, payload) => {
    return apiClient.patch(`/tutorials/intermediate/${id}`, payload);
};

export const apiDeleteIntermediateTutorial = async (id) => {
    return apiClient.delete(`/tutorials/intermediate/${id}`);
};
