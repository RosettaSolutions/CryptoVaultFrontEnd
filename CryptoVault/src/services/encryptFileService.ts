import api from "./apiInstance";

export async function encryptFile(token: string, file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("files/encrypt/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}
