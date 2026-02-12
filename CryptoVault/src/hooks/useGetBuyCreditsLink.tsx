import { AxiosError } from "axios";
import { useState, useCallback } from "react";
import { useMessage } from "@/contexts/MessageContext";
import { getBuyCreditsLink } from "@/services/getBuyCreditsLink";

export function useBuyCreditsCheckout() {
    const { newMessage } = useMessage();

    const [loading, setLoading] = useState(false);

    const fetchBuyCreditsLink = useCallback(async () => {
        try {
            setLoading(true);

            const { data } = await getBuyCreditsLink();
            return data;
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                newMessage({
                    messageType: "error",
                    message: error.response?.data.error || "Error fetching buy credits link",
                    description: error.response?.data.detail,
                });
            }
            else newMessage({
                messageType: "error",
                message: "Error fetching buy credits link",
                description: "Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    }, [newMessage]);

    return {
        fetchBuyCreditsLink,
        loading
    };
}