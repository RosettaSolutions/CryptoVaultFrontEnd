import { useState } from "react";
import { registerUser } from "../services/registerUser";
import { useMessage } from "../contexts/MessageContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useRegisterUser() {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<Error | null>(null);
  const { newMessage } = useMessage();
  const navigate = useNavigate();

  const registerNewUser = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);
      const res = await registerUser(username, email, password);
      if (res.status == 201) {
        newMessage({
          messageType: "success",
          message: "User created successfully.",
        });
        navigate("/login");
      }
    } catch (err) {
      let errorMessage = "An unknown error occurred.";

      if (axios.isAxiosError(err) && err.response) {
        const data = err.response.data;

        if (typeof data.Error === "string") {
          errorMessage = data.Error;
        } else if (Array.isArray(data.Error)) {
          errorMessage = data.Error.join(" ");
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

  return { registerNewUser, loading };
}
