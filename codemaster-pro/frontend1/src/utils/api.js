import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/api" });

// Mock for testing (always returns data)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("Mock API response");
    return Promise.resolve({ data: { message: "Mock success" } });
  }
);

export default api;
