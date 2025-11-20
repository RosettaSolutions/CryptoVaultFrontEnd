import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { fetchFilesList } from "../services/filesService";
import type { EncryptedFilesList } from "../types/EncryptedFilesList";

export function useGetFilesList() {
  const { isAuthenticated } = useAuth();
  const [filesList, setFilesList] = useState<EncryptedFilesList | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getFiles = useCallback(async () => {
    try {
      setLoading(true);
      if (!isAuthenticated) {
        throw new Error("User not authenticated.");
      }

      const res = await fetchFilesList();
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
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      getFiles();
    }
  }, [getFiles]);

  return { filesList, loading, error, refetch: getFiles };
}
