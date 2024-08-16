// src/services/quiz.js
import { apiClient } from "./config";

export const apiCreateQuiz = async (payload) => {
    return apiClient.post("/quiz", payload);
};

export const apiGetAllQuizzes = async () => {
    return apiClient.get("/quiz");
};

export const apiGetQuizById = async (id) => {
    return apiClient.get(`/quiz/${id}`);
};

export const apiDeleteQuiz = async (id) => {
    return apiClient.delete(`/quiz/${id}`);
};
