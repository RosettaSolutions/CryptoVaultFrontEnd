import api from "./apiInstance";

export async function listFilesInBlockchain(token: string) {
  const response = await api.get("files/list_files_in_blockchain/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
