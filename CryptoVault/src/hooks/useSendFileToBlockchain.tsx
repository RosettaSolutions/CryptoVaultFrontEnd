import { sendFileToBlockchain } from "../services/sendFileToBlockchain";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useMessage } from "../contexts/MessageContext";
import axios from "axios";

export function useSendFileToBlockchain() {
  const { isAuthenticated } = useAuth();
  const [loadingSend, setLoadingSend] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { newMessage } = useMessage();

  const sendToBlockchain = async (fileId: number) => {
    if (!isAuthenticated) {
      setError(new Error("Access Token not provided."));
      return;
    }
    try {
      setLoadingSend(true);
      const res = await sendFileToBlockchain(fileId);
      if (res.status == 201) {
        newMessage({
          messageType: "success",
          message: "File successfully in Polygon blockchain.",
        });
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409){
          newMessage({
            messageType: "warning",
            message: "This file already has a record on the Polygon blockchain.",
          });
        } else if (err.response?.status === 402){
          newMessage({
            messageType: "warning",
            message: "Insufficient available credits.",
          });
        }
      } else if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("An unknown error occurred."));
      }
      // console.log(err);
    } finally {
      setLoadingSend(false);
    }
  };

  return { sendToBlockchain, loadingSend, error };
}
