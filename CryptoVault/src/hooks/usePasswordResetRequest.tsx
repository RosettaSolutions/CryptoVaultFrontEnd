import { useState } from "react";
import { passwordResetRequest } from "../services/passwordResetRequest";
import { useMessage } from "../contexts/MessageContext";
import axios from "axios";
import type { ApiErrorResponse } from "../types/ApiErrorResponse";

export function usePasswordResetRequest() {
  const [loading, setLoading] = useState(true);
  const { newMessage } = useMessage();

  const sendPasswordResetRequest = async (usernameOrEmail: string) => {
    try {
      setLoading(true);
      const res = await passwordResetRequest(usernameOrEmail);
      if (res.status == 200) {
        newMessage({
          messageType: "success",
          message: res.data.message,
        });
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const data = err.response?.data as ApiErrorResponse | undefined;

        const errorMessage =
          data?.detail ||
          data?.error ||
          err.message ||
          "An unexpected error occurred.";

        newMessage({
          messageType: "error",
          message: errorMessage,
        });
      } else {
        newMessage({
          messageType: "error",
          message: "An unexpected non-Axios error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendPasswordResetRequest };
}
