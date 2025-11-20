import api from "./apiInstance";

export async function getApiKeysList() {
  const response = await api.get(`authentication/api_key/`);

  return response;
}
