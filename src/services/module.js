// src/services/module.js
import { apiClient } from "./config";

export const apiCreateModule = async (payload) => {
    return apiClient.post("/modules", payload);
};

export const apiGetAllModules = async () => {
    return apiClient.get("/modules");
};

export const apiGetModuleById = async (id) => {
    return apiClient.get(`/modules/${id}`);
};

export const apiUpdateModule = async (id, payload) => {
    return apiClient.patch(`/modules/${id}`, payload);
};

export const apiDeleteModule = async (id) => {
    return apiClient.delete(`/modules/${id}`);
};
