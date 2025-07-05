import api from "./apiInstance";

export async function getAbiInJson(token: string, fileId: number) {
  const response = await api.get(`blockchain/get_abi/${fileId}/`, {
    responseType: "blob",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
