import { 
  createContext, 
  useContext, 
  useState, 
  useCallback, 
  useEffect,
  type ReactNode 
} from "react";
import { AxiosError } from "axios";
import type { Account } from "../types/Account";
import { getAccountInformation } from "../services/getAccountInformation";

interface AccountContextData {
  accountInformation: Account | null;
  loading: boolean;
  error: AxiosError | null;
  isError: boolean;
  isSuccess: boolean;
  fetchAccountInformation: () => Promise<Account | undefined>;
  refetchAccountInformation: () => Promise<Account | undefined>;
  clearAccountInformation: () => void;
}

interface AccountProviderProps {
  children: ReactNode;
  fetchOnMount?: boolean;
}

const AccountContext = createContext<AccountContextData | undefined>(undefined);

export function AccountProvider({ children, fetchOnMount = true }: AccountProviderProps) {
  const [accountInformation, setAccountInformation] = useState<Account | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchAccountInformation = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await getAccountInformation();
      setAccountInformation(response.data);

      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError);
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const refetchAccountInformation = useCallback(() => {
    return fetchAccountInformation();
  }, [fetchAccountInformation]);

  const clearAccountInformation = useCallback(() => {
    setAccountInformation(null);
    setError(null);
  }, []);

  useEffect(() => {
    if (fetchOnMount) {
      fetchAccountInformation();
    }
  }, [fetchOnMount, fetchAccountInformation]);

  const value: AccountContextData = {
    accountInformation,
    loading,
    error,
    isError: !!error,
    isSuccess: !!accountInformation && !error,
    fetchAccountInformation,
    refetchAccountInformation,
    clearAccountInformation,
  };

  return (
    <AccountContext.Provider value={value}>
      {children}
    </AccountContext.Provider>
  );
}


export function useAccount() {
  const context = useContext(AccountContext);
  
  if (context === undefined) {
    throw new Error("useAccount must be used within an AccountProvider");
  }
  
  return context;
}