// import { createContext, useContext, useState, useCallback } from "react";
// import type { ReactNode } from "react";

// type MessageType = "success" | "error" | "info" | "warning";

// type MessageData = {
//   type: MessageType;
//   message: string;
//   description?: string;
// };

// type MessageContextType = {
//   message: MessageData | null;
//   showAlert: (data: MessageData) => void;
//   hideAlert: () => void;
// };

// const AlertContext = createContext<MessageContextType | undefined>(undefined);

// export const AlertProvider = ({ children }: { children: ReactNode }) => {
//   const [alert, setAlert] = useState<MessageData | null>(null);

//   const showAlert = useCallback((data: MessageData) => {
//     setAlert(data);
//   }, []);

//   const hideAlert = useCallback(() => {
//     setAlert(null);
//   }, []);

//   return (
//     <AlertContext.Provider value={{ message, showAlert, hideAlert }}>
//       {children}
//     </AlertContext.Provider>
//   );
// };

// export const useAlert = (): MessageContextType => {
//   const context = useContext(AlertContext);
//   if (!context) {
//     throw new Error("useAlert must be used within an AlertProvider");
//   }
//   return context;
// };
