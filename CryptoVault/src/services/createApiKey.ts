import api from "./apiInstance";

export async function createApiKey() {
  const response = await api.post(`authentication/api_key/`);
  return response;
}
