import { useState } from "react";
import { requireVerificationEmail } from "@/services/requireVerificationEmail";
import { useMessage } from "../contexts/MessageContext";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";


export function useRequireVerificationEmail() {
  const [loading, setLoading] = useState(false);
  const { newMessage } = useMessage();
  const { isAuthenticated } = useAuth();

  const requireVerification = async () => {
    try {
      setLoading(true);
      if (!isAuthenticated) throw new Error("Token not provided.");
      const response = await requireVerificationEmail();

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

  return { requireVerification, loading };
}
