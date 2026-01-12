import api from "./apiInstance";

export async function verifyEmail(
  uid: string,
  token: string
) {
  const data = {
    uid: uid,
    token: token,
  };

  const response = await api.post("account/verify_email/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
