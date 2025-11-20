import { getEncryptedFile } from "../services/getEncryptedFile";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export function useDownloadEncryptedFile() {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  //   const [responseData, setResponseData] = useState<File | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const downloadEncryptedFile = async (fileId: number) => {
    if (!isAuthenticated) {
      setError(new Error("Access Token not provided."));
      return;
    }
    try {
      setLoading(true);
      const res = await getEncryptedFile(fileId);

      const fileName = getFileNameFromContentDisposition(
        res.headers["content-disposition"]
      );

      console.log(res.headers);

      const url = window.URL.createObjectURL(
        new Blob([res.data], { type: "application/octet-stream" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName || "encrypted_file.aes");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // limpa URL do blob
    } catch (err) {
      console.error("Download failed", err);
      throw err;
    }
  };

  return { downloadEncryptedFile, loading, error };
}

function getFileNameFromContentDisposition(
  header: string | undefined
): string | null {
  if (!header) return null;

  const match = header.match(/filename="?([^"]+)"?/);
  return match ? match[1] : null;
}
