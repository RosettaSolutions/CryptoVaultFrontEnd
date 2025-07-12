import api from "./apiInstance";

export async function decryptFile(
  token: string,
  file: File,
  fileId: number,
  decryptionKey: string
) {
  const formData = new FormData();
  formData.append("refered_file_id", `${fileId}`);
  formData.append("encrypted_file", file);
  formData.append("decryption_key", decryptionKey);

  const response = await api.post("files/decrypt/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    responseType: "blob",
  });

  return response;
}
