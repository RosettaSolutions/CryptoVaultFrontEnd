import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { fetchFilesList } from "../services/filesService";
import type { EncryptedFilesList } from "../types/EncryptedFilesList";

export function useGetFilesList() {
  const { accessToken } = useAuth();
  const [filesList, setFilesList] = useState<EncryptedFilesList | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getFiles = useCallback(async () => {
    try {
      setLoading(true);
      if (!accessToken) throw new Error("Token not provided.");

      const res = await fetchFilesList(accessToken);
      setFilesList(res.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error.");
      }
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  useEffect(() => {
    getFiles();
  }, [getFiles]);

  return { filesList, loading, error, refetch: getFiles };
}
