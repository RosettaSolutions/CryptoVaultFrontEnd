import api from "./apiInstance";

export async function changeEmail(
  newEmail: string,
  password: string
) {
  const data = {
    new_email: newEmail,
    password: password,
  };

  const response = await api.post("account/change_email/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
