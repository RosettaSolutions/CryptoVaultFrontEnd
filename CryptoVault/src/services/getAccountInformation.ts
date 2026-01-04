import api from "./apiInstance";


export async function getAccountInformation() {
  const response = await api.get(`account/information/`);
  return response;
}
