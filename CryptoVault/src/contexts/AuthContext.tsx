import * as authService from "../services/authService";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useMessage } from "./MessageContext";


interface AuthContextData {
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { newMessage } = useMessage();

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      try {
        const isValid = await authService.verifyToken();
        console.log("isValid:", isValid);
        if (isValid) {
          setIsAuthenticated(true);
          console.log(isAuthenticated);
          return;
        }

        await authService.refresh();
        const refreshedIsValid = await authService.verifyToken();
        setIsAuthenticated(refreshedIsValid);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const logout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
    newMessage({
      messageType: "success",
      message: "Logout successful.",
    });
  };

  return (
    <AuthContext.Provider value={{ logout, loading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
