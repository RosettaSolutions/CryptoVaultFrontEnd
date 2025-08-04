import api from "./apiInstance";

export async function deleteApiKey(token: string, key_id: number) {
  const response = await api.delete(`authentication/api_key/delete/${key_id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
