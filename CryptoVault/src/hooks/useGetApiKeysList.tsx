import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useMessage } from "../contexts/MessageContext";
import { getApiKeysList } from "../services/getApiKeysList";
import type { ApiKeysListResponse } from "../types/ApiKeysListResponse";

type ErrorResponse = {
  detail?: string;
  error?: string;
};

export function useGetApiKeysList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiKeysListResponse | null>(null);
  const { newMessage } = useMessage();
  const { isAuthenticated } = useAuth();

  const getList = async () => {
    try {
      setLoading(true);
      if (!isAuthenticated) throw new Error("Token not provided.");
      const response = await getApiKeysList();
      setData(response.data);
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
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return {
    data,
    loading,
    refetch: getList,
  };
}
