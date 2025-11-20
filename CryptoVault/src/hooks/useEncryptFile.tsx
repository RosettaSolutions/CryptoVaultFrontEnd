import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { encryptFile } from "../services/encryptFileService";
import type { EncryptedFileResponse } from "../types/EncryptedFileResponse";

export function useEncryptFile() {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] =
    useState<EncryptedFileResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const encrypt = async (file: File) => {
    if (!isAuthenticated) {
      setError(new Error("Access Token not provided."));
      return;
    }
    try {
      setLoading(true);
      const res = await encryptFile(file);
      setResponseData(res.data);
      // console.log(res.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { encrypt, loading, error, responseData };
}
