import "@/styles/globals.css";
import "@/styles/calendar.css";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import { useAuthToken } from "@/hooks/user";
import ApiProvider from "@/components/ApiProvider";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [authToken] = useAuthToken();

  return (
    <ApiProvider authToken={authToken}>
      <main
        className={`flex min-h-screen flex-col items-center justify-between py-12 px-4 ${inter.className}`}
      >
        <Component {...pageProps} />
      </main>
    </ApiProvider>
  );
}
