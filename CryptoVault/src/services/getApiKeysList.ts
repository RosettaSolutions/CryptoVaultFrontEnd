import api from "./apiInstance";

export async function getApiKeysList(token: string) {
  const response = await api.get(`authentication/api_key/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
