import api from "./apiInstance";

export async function sendFileToBlockchain(token: string, fileId: number) {
  const formData = new FormData();
  formData.append("file_id", `${fileId}`);

  const response = await api.post(`blockchain/storage/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
