import { useAuth } from "../contexts/AuthContext";
import { deleteApiKey } from "../services/deleteApiKey";
import { useState } from "react";
import { useMessage } from "../contexts/MessageContext";

export function useDeleteApiKey() {
  const { isAuthenticated } = useAuth();
  const { newMessage } = useMessage();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteKey = async (keyId: number) => {
    if (!isAuthenticated) {
      setError(new Error("Access Token not provided."));
      return;
    }
    try {
      setLoadingDelete(true);
      const res = await deleteApiKey(keyId);
      if (res.status == 204) {
        newMessage({
          messageType: "success",
          message: `API Key with ID ${keyId}, deleted successfully.`,
        });
      }
    } catch (err) {
      setError(err as Error);
      newMessage({
        messageType: "error",
        message: `An unexpected error occurred, try again later.`,
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  return { deleteKey, loadingDelete, error };
}
