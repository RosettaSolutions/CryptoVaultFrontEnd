import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

type MessageType = "success" | "error" | "info" | "warning";

type MessageData = {
  messageType: MessageType;
  message: string;
  description?: string;
};

type MessageContextType = {
  message: MessageData | null;
  newMessage: (data: MessageData) => void;
  excludeMessage: () => void;
};

const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider = ({children}: {children: ReactNode}) => {
    const [message, setMessage] = useState<MessageData | null>(null)

    const newMessage = useCallback((data: MessageData) => {
        setMessage(data)
        setTimeout(() => {
            setMessage(null)
        }, 7000);
    }, []);

    const excludeMessage = useCallback(() => {
        setMessage(null);
    }, [])

    return (
        <MessageContext.Provider value={{message, newMessage, excludeMessage}}>
            {children}
        </MessageContext.Provider>
    )
}

export const useMessage = (): MessageContextType => {
    const context = useContext(MessageContext)
    if(!context){
        throw new Error("useMessage must be used within an MessageProvider");
    }
    return context
}
