//src/services/profile.js
import { apiClient } from "./config";

export const apiGetUserProfile = async () => {
    return apiClient.get("/users/userProfile");
};

export const apiCreateUserProfile = async (payload) => {
    return apiClient.post("/users/userProfile", payload);
};

export const apiUpdateUserProfile = async (userProfileId, payload) => {
    return apiClient.patch(`/users/userProfile/${userProfileId}`, payload);
};
