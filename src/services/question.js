// src/services/question.js
import { apiClient } from "./config";

export const apiCreateQuestion = async (quizId, payload) => {
    return apiClient.post(`/quiz/${quizId}/questions`, payload);
};

export const apiDeleteQuestion = async (quizId, questionId) => {
    return apiClient.delete(`/quiz/${quizId}/questions/${questionId}`);
};
