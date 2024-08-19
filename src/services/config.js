//src/services/config
import axios from 'axios';
import { toast } from 'react-toastify';

// Fetch the base URL for the API from environment variables
const baseUrl = import.meta.env.VITE_BASE_URL;
console.log('Base URL:', baseUrl);

// Create an instance of Axios with the base URL
export const apiClient = axios.create({
    baseURL: baseUrl,
});

// Function to get user details from localStorage
export const getDetails = () => {
    const user = {};
    user.Token = localStorage.getItem('Token');
    // user.firstName = localStorage.getItem('firstName');
    // user.lastName = localStorage.getItem('lastName');
    user.email = localStorage.getItem('email');
    // user.userName = localStorage.getItem('userName');
    return user;
};

// Request interceptor to add Authorization header with the access token
apiClient.interceptors.request.use(
    (config) => {
        const { Token } = getDetails();
        if (Token) {
            config.headers.Authorization = `Bearer ${Token}`;
            console.log('Token being sent:', Token);
        } else {
            console.log('No token available');
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors and display appropriate messages
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    toast.error('Unauthorized: Please log in again.');
                    localStorage.removeItem('Token');
                    // localStorage.removeItem('firstName');
                    localStorage.removeItem('email');
                    // localStorage.removeItem('userName');
                    window.location.href = '/login';
                    break;
                case 404:
                    toast.error('Not found');
                    break;
                case 400:
                    toast.error('Bad Request: ' + (error.response.data.message || 'Invalid data'));
                    break;
                case 403:
                    toast.error('Forbidden: ' + (error.response.data.message || 'You do not have permission to access this resource'));
                    break;
                case 500:
                    toast.error('Internal Server Error');
                    break;
                default:
                    toast.error('An error occurred');
            }
        } else {
            toast.error('Network Error');
        }
        return Promise.reject(error);
    }
);
