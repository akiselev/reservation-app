import { useRouter } from "next/router";

import ProviderCalendar from "@/components/ProviderCalendar";

const ProviderPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Schedule Your Appointment
        </h2>
      </div>
      {slug ? (
        <ProviderCalendar slug={slug as string} />
      ) : (
        "Error: Provider not found"
      )}
    </div>
  );
};

export default ProviderPage;
