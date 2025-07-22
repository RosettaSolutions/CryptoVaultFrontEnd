import api from "./apiInstance";

interface AuthTokens {
  refresh: string;
  access: string;
}

interface RefreshResponse {
  access: string;
}

export const login = async (
  username: string,
  password: string
): Promise<AuthTokens> => {
  const response = await api.post<AuthTokens>("authentication/token/", {
    username,
    password,
  });
  return response.data;
};

export const refresh = async (
  refreshToken: string
): Promise<RefreshResponse> => {
  const response = await api.post<RefreshResponse>(
    "authentication/token/refresh/",
    {
      refresh: refreshToken,
    }
  );
  
  return response.data;
};

export const verifyToken = async (accessToken: string) => {
  try {
    await api.post("authentication/token/verify/", {
      token: accessToken,
    });
    return true;
  } catch (error) {
    return false;
  }
};
