import api from "./apiInstance";

export async function passwordResetVerify(uid: string, token: string) {
  const response = await api.get(
    `authentication/password_reset_verify/?uid=${uid}&token=${token}`
  );

  return response;
}
