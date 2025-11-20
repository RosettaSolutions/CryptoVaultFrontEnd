import { getAbiInJson } from "../services/getAbiInJson";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { useMessage } from "../contexts/MessageContext";

export function useGetAbiInJson() {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { newMessage } = useMessage();

  const downloadAbiInJson = async (fileId: number) => {
    if (!isAuthenticated) {
      setError(new Error("Access Token not provided."));
      return;
    }
    try {
      setLoading(true);
      const res = await getAbiInJson(fileId);

      const fileName = getFileNameFromContentDisposition(
        res.headers["content-disposition"]
      );

      //   console.log(res.headers);

      const url = window.URL.createObjectURL(
        new Blob([res.data], { type: "application/octet-stream" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName || "contract_abi.json");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      newMessage({
        messageType: "success",
        message: `ABI of file with ID ${fileId} downloaded sucefully.`,
      });
    } catch (err) {
      console.error("Download failed", err);
      throw err;
    }
  };

  return { downloadAbiInJson, loading, error };
}

function getFileNameFromContentDisposition(
  header: string | undefined
): string | null {
  if (!header) return null;

  const match = header.match(/filename="?([^"]+)"?/);
  return match ? match[1] : null;
}
