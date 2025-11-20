import api from "./apiInstance";

export async function getAbiInJson(fileId: number) {
  const response = await api.get(`blockchain/get_abi/${fileId}/`, {
    responseType: "blob",
  });
  
  return response;
}
