// src/services/auth
import { apiClient, clearDetails } from "./config";

export const apiSignUp = async (payload) => {
    return apiClient.post("/users/auth/signup", payload);
};

export const apiLogin = async (payload) => {
    return apiClient.post("/users/auth/login/token", payload);
};

export const apiLogout = async () => {
    await apiClient.post("/users/auth/logout");
    clearDetails();
};

export const apiCheckUserNameExists = async (userName) => {
    return apiClient.get(`/users/auth/${userName}`);
};

export const apiPasswordRecover = async (email) => {
    return apiClient.post("/auth/password/recover", { email });
};

export const apiPasswordVerifyCode = async (code) => {
    return apiClient.post("`/auth/password/verify-code", { code });
};

export const apiPasswordChange = async (payload) => {
    return apiClient.post("`/auth/password/change", payload);
};