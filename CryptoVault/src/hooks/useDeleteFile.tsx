import { useState } from "react";
import { AxiosError } from "axios";
import { useAuth } from "../contexts/AuthContext";
import { deleteFile } from "../services/deleteFile";
import { useMessage } from "../contexts/MessageContext";

export function useDeleteFile() {
  const { isAuthenticated } = useAuth();
  const { newMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteEncryptedFile = async (fileId: number) => {
    if (!isAuthenticated) {
      setError(new Error("Access Token not provided."));
      return;
    }
    try {
      setLoading(true);
      const res = await deleteFile(fileId);
      if (res.status == 204) {
        newMessage({
          messageType: "success",
          message: `File with ID ${fileId}, deleted successfully.`,
        });
      }
    } catch (err) {
      setError(err as Error);
      if (err instanceof AxiosError) {
        newMessage({
          messageType: "error",
          message: err.response?.data.error || "Error deleting file.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { deleteEncryptedFile, loading, error };
}
