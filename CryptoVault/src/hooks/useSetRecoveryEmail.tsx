import { useState } from "react";
import { setRecoveryEmail as setRecoveryEmailService } from "../services/setRecoveryEmail";
import { useMessage } from "../contexts/MessageContext";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";


export function useSetRecoveryEmail() {
  const [loading, setLoading] = useState(false);
  const { newMessage } = useMessage();
  const { isAuthenticated } = useAuth();

  const setRecoveryEmail = async (
    newRecoveryEmail: string,
    password: string
  ) => {
    try {
      setLoading(true);
      if (!isAuthenticated) throw new Error("Token not provided.");
      if (!newRecoveryEmail || !password) {
        newMessage({
          messageType: "warning",
          message: "New Recovery Email and Password fields are required.",
        });
        return;
      }

      const response = await setRecoveryEmailService(newRecoveryEmail, password);

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

  return { setRecoveryEmail, loading };
}
