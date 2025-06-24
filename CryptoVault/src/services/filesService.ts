import api from "./apiInstance";

export async function fetchFilesList(token: string) {
  const response = await api.get("files/list/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
