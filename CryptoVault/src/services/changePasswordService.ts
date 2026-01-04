import api from "./apiInstance";


export async function changePassword(newPassword: string) {
  const response = await api.post(`account/change_password/`, {
    new_password: newPassword,
  });
  return response;
}
