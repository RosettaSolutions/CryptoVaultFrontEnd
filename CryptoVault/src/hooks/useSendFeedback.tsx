import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useMessage } from "../contexts/MessageContext";
import { sendFeedback as sendFeedbackService } from "../services/sendFeedback";

export function useSendFeedback() {
  const { isAuthenticated } = useAuth();
  const [loadingSend, setLoadingSend] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { newMessage } = useMessage();

  const sendFeedback = async (
    feedbackType: string,
    title: string,
    description: string,
    screenshot?: File | null
  ) => {
    if (!isAuthenticated) {
      // Maybe is unnecessary because protectedRoute guard is handle with that.
      setError(new Error("Access Token not provided."));
      return false;
    }
    try {
      setLoadingSend(true);
      const res = await sendFeedbackService(
        feedbackType,
        title,
        description,
        screenshot
      );
      if (res.status == 201) {
        newMessage({
          messageType: "success",
          message: "Feedback sent successfully.",
        });
        return true;
      }
      return false;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const data = err.response?.data;

        if (data && typeof data === "object") {
          Object.entries(data).forEach(([field, messages]) => {
            // messages pode ser array ou string
            const messageText = Array.isArray(messages)
              ? messages.join(" ")
              : String(messages);

            newMessage({
              messageType: "warning",
              message: `${field}: ${messageText}`,
            });
          });
          return false;
        }

        // Fallback genérico
        newMessage({
          messageType: "warning",
          message: "An error occurred while sending feedback.",
        });
      } else if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("An unknown error occurred."));
      }
      return false;
    } finally {
      setLoadingSend(false);
    }
  };

  return { sendFeedback, loadingSend, error };
}
