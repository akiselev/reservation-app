import { useMemo } from "react";
import { DateTime } from "luxon";
import { useRouter } from "next/router";

import ProviderSchedule from "@/components/ProviderSchedule";
import { useProviderSchedule } from "@/hooks/api";

const ProviderPage = () => {
  const router = useRouter();
  const { slug = "", date = "2023-01-01" } = router.query;
  const { data, isLoading } = useProviderSchedule(
    slug as string,
    date as string,
    true
  );
  const slots = useMemo(
    () =>
      data?.schedule.map((slot) => ({
        ...slot,
        className: slot.enabled
          ? "bg-green-400 p-2 text-xs leading-5 hover:bg-green-200"
          : "bg-red-400 p-2 text-xs leading-5 hover:bg-red-200",
        // onClick: () => onClick(slot),
        content: (
          <div className="text-xs">
            {DateTime.fromISO(slot.startTime).toFormat("HH:mm")} -{" "}
            {DateTime.fromISO(slot.endTime).toFormat("HH:mm")}
          </div>
        ),
      })) || [],
    [data]
  );

  return (
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Set Your Schedule
        </h2>
      </div>
      {!isLoading && data ? (
        <ProviderSchedule provider={data} slots={slots} />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default ProviderPage;
