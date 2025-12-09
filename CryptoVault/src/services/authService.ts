import api from "./apiInstance";

export const login = async (username: string, password: string) => {
  await api.post("authentication/token/", {
    username,
    password,
  });
};

export const refresh = async () => {
  await api.post("authentication/token/refresh/", {});
};

export const verifyToken = async () => {
  try {
    await api.post("authentication/token/verify/", {});
    return true;
  } catch (error) {
    return false;
  }
};

export const logout = async () => {
  await api.post("authentication/logout/", {});
};
