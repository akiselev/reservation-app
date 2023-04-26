import { useProviders } from "@/hooks/api";
import ProviderList from "@/components/ProviderList";

export default function Home() {
  const { data, isLoading } = useProviders();

  return (
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Choose Your Provider
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
          elementum enim vitae ullamcorper suspendisse.
        </p>
      </div>
      {!isLoading && data ? <ProviderList providers={data} /> : "Loading..."}
    </div>
  );
}
