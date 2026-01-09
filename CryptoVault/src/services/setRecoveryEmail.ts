import api from "./apiInstance";

export async function setRecoveryEmail(
  newRecoveryEmail: string,
  password: string
) {
  const data = {
    recovery_email: newRecoveryEmail,
    password: password,
  };

  const response = await api.post("account/set_recovery_email/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
