import api from "./apiInstance";

export async function getEncryptedFile(token: string, fileId: number) {
  const response = await api.get(`files/encrypt/?file_id=${fileId}`, {
    responseType: "blob",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
