import api from "./apiInstance";

export async function getEncryptedFile(fileId: number) {
  const response = await api.get(`files/encrypt/?file_id=${fileId}`, {
    responseType: "blob",
  });

  return response;
}
