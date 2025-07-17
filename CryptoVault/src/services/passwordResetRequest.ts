import api from "./apiInstance";

export async function passwordResetRequest(usernameOrEmail: string) {
  const formData = new FormData();
  formData.append("username_or_email", `${usernameOrEmail}`);

  const response = await api.post(
    "authentication/password_reset_request/",
    formData,
    {}
  );

  return response;
}
