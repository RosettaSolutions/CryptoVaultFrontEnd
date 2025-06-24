import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { fetchFilesList } from "../services/filesService";
import type { EncryptedFilesList } from "../types/EncryptedFilesList";

export function useGetFilesList() {
  const { accessToken } = useAuth();
  const [filesList, setFilesList] = useState<EncryptedFilesList | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFiles = async () => {
      try {
        if (!accessToken) throw new Error("Token not provided.");

        const res = await fetchFilesList(accessToken);
        setFilesList(res.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknow error.");
        }
      } finally {
        setLoading(false);
      }
    };

    getFiles();
  }, [accessToken]); // Maybe add accessToken.

  console.log(filesList);

  return { filesList, loading, error };
}
