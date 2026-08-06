import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Request interceptor to attach Bearer token and handle FormData Content-Type
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sipro_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor for auth expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('sipro_token');
      localStorage.removeItem('sipro_current_user');
      window.dispatchEvent(new Event('sipro-auth-expired'));
    }
    return Promise.reject(error);
  }
);
