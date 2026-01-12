import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { useMessage } from "@/contexts/MessageContext";

export function useLogin() {
  const { newMessage } = useMessage();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const navigate = useNavigate();

  const doLogin = async (username: string, password: string) => {
    try {
      setLoadingLogin(true);
      await login(username, password);
      navigate("/app/files");
      newMessage({
        messageType: "success",
        message: "Login successful.",
      });
    } catch (error) {
      newMessage({
        messageType: "error",
        message: "Login failed.",
        description: "Please, check your username and password.",
      });
    } finally {
      setLoadingLogin(false);
    }
  };
  return { doLogin, loadingLogin };
}
