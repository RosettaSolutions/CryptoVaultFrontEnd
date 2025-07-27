import api from "./apiInstance";

export async function createApiKey(token: string) {
  const response = await api.post(`authentication/api_key/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
