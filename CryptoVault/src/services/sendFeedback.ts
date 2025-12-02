import api from "./apiInstance";

export async function sendFeedback(
  feedbackType: string,
  title: string,
  description: string,
  screenshot?: File | null // Is conditional and nullable necessary?
) {
  const formData = new FormData();
  formData.append("type", feedbackType);
  formData.append("title", title);
  formData.append("description", description);
  if (screenshot) {
    formData.append("image", screenshot);
  }

  const response = await api.post("feedback/create/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
}
