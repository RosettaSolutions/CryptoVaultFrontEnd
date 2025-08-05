import api from "./apiInstance";

export async function updateApiKeyStatus(token: string, keyId: number) {
  const formData = new FormData();
  formData.append("key_id", `${keyId}`);

  const response = await api.patch(`authentication/api_key/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
