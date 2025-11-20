import api from "./apiInstance";

export async function updateApiKeyStatus( keyId: number) {
  const formData = new FormData();
  formData.append("key_id", `${keyId}`);

  const response = await api.patch(`authentication/api_key/`, formData);

  return response;
}
