import api from "./apiInstance";

export async function validateFile(file: File, file_id: number) {
  const formData = new FormData();
  formData.append("file_id", `${file_id}`);
  formData.append("file", file);

  const response = await api.post("validation/validate/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}
