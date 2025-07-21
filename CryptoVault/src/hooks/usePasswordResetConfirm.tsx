import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../contexts/MessageContext";
// import type { ApiErrorResponse } from "../types/ApiErrorResponse";
import { passwordResetConfirm } from "../services/passwordResetConfirm";

export function usePasswordResetConfirm() {
  const [loading, setLoading] = useState(true);
  const { newMessage } = useMessage();
  const navigate = useNavigate();

  const sendPasswordResetConfirm = async (
    password: string,
    uid?: string,
    token?: string
  ) => {
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
      const res = await passwordResetConfirm(uid, token, password);
      navigate("/login");
      if (res.status == 200) {
        newMessage({
          messageType: "success",
          message: res.data.message,
        });
      }
    } catch (err) {
      let errorMessage = "An unknown error occurred.";

      if (axios.isAxiosError(err) && err.response) {
        const data = err.response.data;

        if (typeof data.error === "string") {
          errorMessage = data.error;
        } else if (Array.isArray(data.error)) {
          errorMessage = data.error.join(" ");
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      newMessage({
        messageType: "warning",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendPasswordResetConfirm };
}
