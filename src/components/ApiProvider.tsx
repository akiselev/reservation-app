import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { setAuthToken } from "@/hooks/api";

const queryClient = new QueryClient();

interface ApiProviderProps {
  children: React.ReactNode;
  authToken?: string | null;
}

const ApiProvider: React.FC<ApiProviderProps> = ({ children, authToken }) => {
  // Set up an Axios interceptor to add the authToken to each request
  useEffect(() => setAuthToken(authToken), [authToken]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ApiProvider;
