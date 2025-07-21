import { useState } from "react";
import { passwordResetVerify } from "../services/passwordResetVerify";
import { useMessage } from "../contexts/MessageContext";
import axios from "axios";
import type { ApiErrorResponse } from "../types/ApiErrorResponse";
import { useNavigate } from "react-router-dom";

export function usePasswordResetVerify() {
  const [loading, setLoading] = useState(true);
  const { newMessage } = useMessage();
  const navigate = useNavigate();

  const verifyPasswordResetToken = async (uid?: string, token?: string) => {
    try {
      setLoading(true);
      if (!uid || !token) {
      newMessage({
        messageType: "error",
        message: "Invalid password reset link.",
      });
      navigate("/login");
      return;
    }
      await passwordResetVerify(uid, token);
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
        navigate("/login");
      } else {
        newMessage({
          messageType: "error",
          message: "An unexpected non-Axios error occurred.",
        });
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, verifyPasswordResetToken };
}
