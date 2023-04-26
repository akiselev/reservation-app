import { useRouter } from "next/navigation";

export const useNavigateTo = (): ((path: string) => void) => {
  const router = useRouter();

  return (path: string) => {
    router.push(path);
  };
};
