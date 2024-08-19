//src/services/auth
import { apiClient } from "./config";

export const apiSignUp = async (payload) => {
    console.log('Sending signup request to:', `${apiClient.defaults.baseURL}/users/auth/signup`);
    return apiClient.post("/users/auth/signup", payload);
};

export const apiLogin = async (payload) => {
    console.log('Sending login request to:', `${apiClient.defaults.baseURL}/users/auth/login/token`);
    return apiClient.post("/users/auth/login/token", payload);
};

export const apiLogout = async () => {
    console.log('Sending logout request to:', `${apiClient.defaults.baseURL}/users/auth/logout`);
    await apiClient.post("/users/auth/logout");
};

export const apiPasswordRecover = async (email) => {
    console.log('Sending password recovery request to:', `${apiClient.defaults.baseURL}/auth/password/recover`);
    return apiClient.post("/auth/password/recover", { email });
};

export const apiPasswordVerifyCode = async (code) => {
    console.log('Sending code verification request to:', `${apiClient.defaults.baseURL}/auth/password/verify-code`);
    return apiClient.post("/auth/password/verify-code", { code });
};

export const apiPasswordChange = async (payload) => {
    console.log('Sending password change request to:', `${apiClient.defaults.baseURL}/auth/password/change`);
    return apiClient.post("/auth/password/change", payload);
};

export const apiGetAllUsers = async () => {
    console.log('Sending get all users request to:', `${apiClient.defaults.baseURL}/users/auth/Users`);
    return apiClient.get("/users/auth/Users");
};

export const apiGetUserByUsername = async (userName) => {
    console.log('Sending get user by username request to:', `${apiClient.defaults.baseURL}/users/auth/${userName}`);
    return apiClient.get(`/users/auth/${userName}`);
};