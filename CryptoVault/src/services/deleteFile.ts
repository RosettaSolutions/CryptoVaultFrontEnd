import api from "./apiInstance";

export async function deleteFile(fileId: number) {
  const response = await api.delete(`files/delete/${fileId}/`);

  return response
}
