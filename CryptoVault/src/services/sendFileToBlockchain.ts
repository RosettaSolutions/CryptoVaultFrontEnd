import api from "./apiInstance";

export async function sendFileToBlockchain(fileId: number) {
  const formData = new FormData();
  formData.append("file_id", `${fileId}`);

  const response = await api.post(`blockchain/storage/`, formData);

  return response;
}
