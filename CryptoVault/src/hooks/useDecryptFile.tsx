import { decryptFile } from "../services/decryptFile";
import { useState } from "react";
// import { validateFile } from "../services/validateFile";
import { useMessage } from "../contexts/MessageContext";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

type ErrorResponse = {
  detail?: string;
  error?: string;
};

export function useDecryptFile() {
  const [loading, setLoading] = useState(false);
  const { newMessage } = useMessage();
  const { isAuthenticated } = useAuth();

  const decrypt = async (
    file_id: number,
    file: File,
    decryptionKey: string
  ) => {
    try {
      setLoading(true);
      if (!isAuthenticated) throw new Error("Token not provided.");
      const res = await decryptFile(file, file_id, decryptionKey);

      const fileName = getFileNameFromContentDisposition(
        res.headers["content-disposition"]
      );

      const url = window.URL.createObjectURL(
        new Blob([res.data], { type: "application/octet-stream" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName || "encrypted_file.aes");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      newMessage({
        messageType: "success",
        message: "File decrypted and downloaded successfully.",
      });
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

          newMessage({
            messageType: "error",
            message: errorMessage,
          });
        } else {
          const data = res?.data as ErrorResponse | undefined;

          const errorMessage =
            data?.detail ||
            data?.error ||
            err.message ||
            "An unexpected error occurred.";

          newMessage({
            messageType: "error",
            message: errorMessage,
          });
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

  return { decrypt, loading };
}

function getFileNameFromContentDisposition(
  header: string | undefined
): string | null {
  if (!header) return null;

  const match = header.match(/filename="?([^"]+)"?/);
  return match ? match[1] : null;
}
