import { useState } from "react";
import { validateFile } from "../services/validateFile";
import { useMessage } from "../contexts/MessageContext";
import axios from "axios";
import type { ValidateFileResponse } from "../types/ValidateFileResponse";

type ErrorResponse = {
  detail?: string;
  error?: string;
};

export function useValidateFile() {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState<ValidateFileResponse | null>(
    null
  );
  const { newMessage } = useMessage();

  const validate = async (file: File, file_id: number) => {
    try {
      setLoading(true);
      const res = await validateFile(file, file_id);
      setResponseData(res.data);
      console.log(res.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const data = err.response?.data as ErrorResponse | undefined;

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
      setLoading(false);
    }
  };

  return { validate, loading, responseData };
}
