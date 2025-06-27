import { useAuth } from "../contexts/AuthContext";
import { deleteFile } from "../services/deleteFile";
import { useState } from "react";
import { useMessage } from "../contexts/MessageContext";

export function useDeleteFile() {
  const { accessToken } = useAuth();
  const { newMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteEncryptedFile = async (fileId: number) => {
    if (!accessToken) {
      setError(new Error("Access Token not provided."));
      return;
    }
    try {
      setLoading(true);
      const res = await deleteFile(accessToken, fileId);
      if (res.status == 204) {
        newMessage({
          messageType: "success",
          message: `File with ID ${fileId}, deleted successfully.`,
        });
      }
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { deleteEncryptedFile, loading, error };
}
