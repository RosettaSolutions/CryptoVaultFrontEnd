import { useState } from "react";
import { changeEmail as changeEmailService } from "../services/changeEmail";
import { useMessage } from "../contexts/MessageContext";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";


export function useChangeEmail() {
  const [loading, setLoading] = useState(false);
  const { newMessage } = useMessage();
  const { isAuthenticated } = useAuth();

  const changeEmail = async (
    newEmail: string,
    password: string
  ) => {
    try {
      setLoading(true);
      if (!isAuthenticated) throw new Error("Token not provided.");
      if (!newEmail || !password) {
        newMessage({
          messageType: "warning",
          message: "New Email and Password fields are required.",
        });
        return;
      }

      const response = await changeEmailService(newEmail, password);

      newMessage({
        messageType: "success",
        message: response.data.message,
      });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {

        newMessage({
          messageType: "error",
          message: err.response?.data.error || "An unexpected error occurred.",
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

  return { changeEmail, loading };
}
