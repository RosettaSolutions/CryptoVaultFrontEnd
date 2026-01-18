import axios from "axios";

// O Axios interceptor só deve se preocupar em detectar erros de resposta (ex: 401) e limpar o estado de autenticação, não controlar navegação.

// const redirectToLogin = () => {
//   if (window.location.pathname !== "/login") {
//     window.location.href = "/login";
//   }
// };

const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const refreshToken = () =>
  axios.post(
    `${baseURL}authentication/token/refresh/`,
    {},
    { withCredentials: true }
  );

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        await refreshToken();
        return api({ ...originalRequest });
      } catch (refreshError) {
        // redirectToLogin(); // Why use this ?
        console.log(refreshError)
        window.dispatchEvent(new CustomEvent("auth:session-expired")); // Set session-expired event that authContext will handle.
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
