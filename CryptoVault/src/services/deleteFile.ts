import api from "./apiInstance";

export async function deleteFile(token: string, fileId: number) {
  const response = await api.delete(`files/delete/${fileId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response
}
