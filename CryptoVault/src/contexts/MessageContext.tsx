import { createContext, useContext, useCallback } from "react";
import type { ReactNode } from "react";
import { toast } from "sonner";

type MessageType = "success" | "error" | "info" | "warning" | "default";

type MessageData = {
  messageType: MessageType;
  message: string;
  description?: string;
  showUndo?: boolean;
  duration?: number;
};

type MessageContextType = {
  newMessage: (data: MessageData) => void;
};

const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const newMessage = useCallback((data: MessageData) => {
    const { messageType, message, description, showUndo, duration } = data;

    switch (messageType) {
      case "success":
        toast.success(message, { description, action: showUndo ? { label: "Undo", onClick: () => {}} : undefined, duration });
        break;
      case "error":
        toast.error(message, { description, action: showUndo ? { label: "Undo", onClick: () => {}} : undefined, duration });
        break;
      case "info":
        toast.info(message, { description, action: showUndo ? { label: "Undo", onClick: () => {}} : undefined, duration });
        break;
      case "warning":
        toast.warning(message, { description, action: showUndo ? { label: "Undo", onClick: () => {}} : undefined, duration });
        break;
      default:
        toast(message, { description, action: showUndo ? { label: "Undo", onClick: () => {}} : undefined, duration });
    }
  }, []);

  return (
    <MessageContext.Provider value={{ newMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = (): MessageContextType => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context;
};