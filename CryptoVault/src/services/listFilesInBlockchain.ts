import api from "./apiInstance";

export async function listFilesInBlockchain() {
  const response = await api.get("files/list_files_in_blockchain/");

  return response;
}
