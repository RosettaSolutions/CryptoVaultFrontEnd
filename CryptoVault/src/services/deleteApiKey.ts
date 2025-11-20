import api from "./apiInstance";

export async function deleteApiKey(key_id: number) {
  const response = await api.delete(`authentication/api_key/delete/${key_id}/`);
  
  return response;
}
