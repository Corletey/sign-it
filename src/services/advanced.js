// src/services/advanced.js
import { apiClient } from "./config";

export const apiGetAllAdvancedTutorials = async () => {
    return apiClient.get("/tutorials/advanced");
};

export const apiGetAdvancedTutorialById = async (id) => {
    return apiClient.get(`/tutorials/advanced/${id}`);
};

export const apiCreateAdvancedTutorial = async (payload) => {
    return apiClient.post("/tutorials/advanced", payload);
};

export const apiUpdateAdvancedTutorial = async (id, payload) => {
    return apiClient.patch(`/tutorials/advanced/${id}`, payload);
};

export const apiDeleteAdvancedTutorial = async (id) => {
    return apiClient.delete(`/tutorials/advanced/${id}`);
};
