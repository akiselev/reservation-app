import useLocalStorageState from "use-local-storage-state";

import { User } from "@/types";

export const useProfile = (): [User | null, (user: User | null) => void] => {
  const [user, setUser] = useLocalStorageState<User | null>("userProfile", {
    defaultValue: null,
  });

  return [user, setUser];
};

export const useAuthToken = (): [
  string | null,
  (user: string | null) => void
] => {
  const [authToken, setAuthToken] = useLocalStorageState<string | null>(
    "userAuthToken",
    {
      defaultValue: null,
    }
  );

  return [authToken, setAuthToken];
};
