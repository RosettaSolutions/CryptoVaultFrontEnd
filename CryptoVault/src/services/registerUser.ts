import api from "./apiInstance";

export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("email", email);

  const response = await api.post("authentication/user_creation/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}
