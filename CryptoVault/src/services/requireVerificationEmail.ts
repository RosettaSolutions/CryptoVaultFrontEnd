import api from "./apiInstance";

export async function requireVerificationEmail() {
  const response = await api.post("account/send_email_verification/");
  return response;
}
