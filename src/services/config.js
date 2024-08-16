//src/services/config
import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
    baseURL: baseUrl,
});

export const getDetails = () => {
    const user = {};
    user.token = localStorage.getItem("accessToken");
    user.firstName = localStorage.getItem("firstName");
    user.lastName = localStorage.getItem("lastName");
    user.userName = localStorage.getItem("userName");
    return user;
};

export const clearDetails = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("userName");
};

apiClient.interceptors.request.use(
    (config) => {
        const { token } = getDetails();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                clearDetails();
                window.location.replace("/login");
            } else if (error.response.status === 404) {
                toast.error("Not found");
            } else if (error.response.status === 400) {
                toast.error("Bad Request: " + (error.response.data.message || "Invalid data"));
            } else if (error.response.status === 403) {
                toast.error("Forbidden: " + (error.response.data.message || "You do not have permission to access this resource"));
            } else if (error.response.status === 500) {
                toast.error("Internal Server Error");
            } else {
                toast.error("An error occurred");
            }
        } else {
            toast.error("Network Error");
        }
        return Promise.reject(error);
    }
);
