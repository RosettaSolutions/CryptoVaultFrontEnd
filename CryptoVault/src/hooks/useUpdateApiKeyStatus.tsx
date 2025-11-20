import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useMessage } from "../contexts/MessageContext";
import type { ApiErrorResponse } from "../types/ApiErrorResponse";
import { updateApiKeyStatus } from "../services/updateApiKeyStatus";

export function useUpdateApiKeyStatus() {
  const [loadingUpdateKey, setLoadingUpdateKey] = useState(false);
  const { newMessage } = useMessage();
  const { isAuthenticated } = useAuth();

  const updateStatus = async (keyId: number) => {
    try {
      setLoadingUpdateKey(true);
      if (!isAuthenticated) throw new Error("Token not provided.");
      const res = await updateApiKeyStatus(keyId);
      if (res.status == 200) {
        newMessage({
          messageType: "success",
          message: res.data.success,
        });
      }
    } catch (err: unknown) {
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
      } else {
        newMessage({
          messageType: "error",
          message: "An unexpected non-Axios error occurred.",
        });
      }
    } finally {
      setLoadingUpdateKey(false);
    }
  };

  return { updateStatus, loadingUpdateKey };
}
