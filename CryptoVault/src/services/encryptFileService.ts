import api from "./apiInstance";

export async function encryptFile(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("files/encrypt/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}
