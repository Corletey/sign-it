// src/services/beginner.js
import { apiClient } from "./config";

export const apiGetAllBeginnerTutorials = async () => {
    return apiClient.get("/tutorials/beginner");
};

export const apiGetBeginnerTutorialById = async (id) => {
    return apiClient.get(`/tutorials/beginner/${id}`);
};

export const apiCreateBeginnerTutorial = async (payload) => {
    return apiClient.post("/tutorials/beginner", payload);
};

export const apiUpdateBeginnerTutorial = async (id, payload) => {
    return apiClient.patch(`/tutorials/beginner/${id}`, payload);
};

export const apiDeleteBeginnerTutorial = async (id) => {
    return apiClient.delete(`/tutorials/beginner/${id}`);
};
