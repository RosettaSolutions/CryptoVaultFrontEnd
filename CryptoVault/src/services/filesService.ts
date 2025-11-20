import api from "./apiInstance";

export async function fetchFilesList() {
  const response = await api.get("files/list/");
  return response;
}
