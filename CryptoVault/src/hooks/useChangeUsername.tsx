import { useState } from "react";
import { changeUsername as changeUsernameService } from "../services/changeUsername";
import { useMessage } from "../contexts/MessageContext";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";


export function useChangeUsername() {
  const [loading, setLoading] = useState(false);
  const { newMessage } = useMessage();
  const { isAuthenticated } = useAuth();

  const changeUsername = async (
    newUsername: string,
    password: string
  ) => {
    try {
      setLoading(true);
      if (!isAuthenticated) throw new Error("Token not provided.");
      if (!newUsername || !password) {
        newMessage({
          messageType: "warning",
          message: "New Username and Password fields are required.",
        });
        return;
      }

      const response = await changeUsernameService(newUsername, password);

      newMessage({
        messageType: "success",
        message: response.data.message,
      });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {

        if (err.response?.status === 406) {
          newMessage({
            messageType: "error",
            message: "Data validation not accepted.",
          });
          return;
        }

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

  return { changeUsername, loading };
}
