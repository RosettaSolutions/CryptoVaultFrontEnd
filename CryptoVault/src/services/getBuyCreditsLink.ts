import api from "./apiInstance";

export async function getBuyCreditsLink() {
  const response = await api.post(`wallet/create_checkout_session/`)

  return response;
}