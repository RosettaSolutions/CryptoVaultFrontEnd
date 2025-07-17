import api from "./apiInstance";

export async function passwordResetConfirm(
  uid: string,
  token: string,
  password: string
) {
  const formData = new FormData();
  formData.append("uid", uid);
  formData.append("token", token);
  formData.append("password", password);

  const response = await api.post(
    "authentication/password_reset_confirm/",
    formData,
    {}
  );

  return response;
}
