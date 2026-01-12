import { useState } from "react";
import { verifyEmail } from "@/services/verifyEmail";


export function useVerifyEmail() {
  const [loading, setLoading] = useState(false);

  const fetchVerifyEmail = async (uid: string, token: string) => {
    try {
      setLoading(true);
      if (!uid || !token) return false;
      const response = await verifyEmail(uid, token);
      return response.status === 200 ? true : false; 
    } catch (err: unknown) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { fetchVerifyEmail, loading };
}
