import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import type { FilesOnTheBlockchain } from "../types/FilesOnTheBlockchain";
import { listFilesInBlockchain } from "../services/listFilesInBlockchain";

export function useListFilesInBlockchain() {
  const { accessToken } = useAuth();
  const [filesInBlockchainList, setFilesInBlockchainList] = useState<FilesOnTheBlockchain | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getFilesInBlockchain = useCallback(async () => {
    try {
      setLoading(true);
      if (!accessToken) throw new Error("Token not provided.");

      const res = await listFilesInBlockchain(accessToken);
      setFilesInBlockchainList(res.data);
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
    getFilesInBlockchain();
  }, [getFilesInBlockchain]);

  return { filesInBlockchainList, loading, error, refetch: getFilesInBlockchain };
}
