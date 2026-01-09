import api from "./apiInstance";

export async function changeUsername(
  newUsername: string,
  password: string
) {
  const data = {
    new_username: newUsername,
    password: password,
  };

  const response = await api.post("account/change_username/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
