import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useMessage } from "../contexts/MessageContext";
import { createApiKey } from "../services/createApiKey";

type ErrorResponse = {
  detail?: string;
  error?: string;
};

export function useCreateApiKey() {
  const [loadingCreateKey, setLoadingCreateKey] = useState(false);
  const { newMessage } = useMessage();
  const { accessToken } = useAuth();

  const createKey = async () => {
    try {
      setLoadingCreateKey(true);
      if (!accessToken) throw new Error("Token not provided.");
      const response = await createApiKey(accessToken);
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const res = err.response;
        if (res?.data instanceof Blob && res.data.type === "application/json") {
          const text = await res.data.text();
          const json = JSON.parse(text) as ErrorResponse;
          const errorMessage =
            json.detail ||
            json.error ||
            err.message ||
            "An unexpected error occurred.";
          newMessage({ messageType: "error", message: errorMessage });
        } else {
          const data = res?.data as ErrorResponse | undefined;
          const errorMessage =
            data?.detail ||
            data?.error ||
            err.message ||
            "An unexpected error occurred.";
          newMessage({ messageType: "error", message: errorMessage });
        }
      } else {
        newMessage({
          messageType: "error",
          message: "An unexpected non-Axios error occurred.",
        });
      }
    } finally {
      setLoadingCreateKey(false);
    }
  };

  return {
    createKey,
    loadingCreateKey,
  };
}
