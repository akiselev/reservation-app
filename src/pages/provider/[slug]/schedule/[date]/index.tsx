import { DateTime } from "luxon";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";

import ConfirmForm from "@/components/ConfirmForm";
import { Reservation, ScheduleEntry } from "@/types";
import ProviderSchedule from "@/components/ProviderSchedule";
import {
  useConfirmReservation,
  useCreateReservation,
  useProvider,
  useProviderSchedule,
} from "@/hooks/api";

function FormWrapper({
  slug,
  reservation,
}: {
  slug: string;
  reservation: Reservation;
}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { data, isLoading } = useProvider(slug);
  const confirmReservation = useConfirmReservation();
  const onSubmit = async () => {
    await confirmReservation.mutateAsync(reservation.id);
    setIsConfirmed(true);
  };

  return (
    <>
      {!isLoading && data ? (
        <ConfirmForm
          reservation={reservation}
          provider={data}
          onSubmit={onSubmit}
          isConfirmed={isConfirmed}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
}

function ProviderWrapper({
  slug,
  date,
  onClick,
}: {
  slug: string;
  date: string;
  onClick: (entry: ScheduleEntry) => void;
}) {
  const { data, isLoading } = useProviderSchedule(slug, date);
  const slots = useMemo(
    () =>
      data?.schedule.map((slot) => ({
        ...slot,
        className: "bg-green-400 p-2 text-xs leading-5 hover:bg-green-200",
        onClick: () => onClick(slot),
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
    <>
      {!isLoading && data ? (
        <ProviderSchedule provider={data} slots={slots} />
      ) : (
        "Loading..."
      )}
    </>
  );
}

const ProviderPage = () => {
  const router = useRouter();
  const { slug = "", date = "2023-01-01" } = router.query;

  const [reservation, setReservation] = useState<Reservation | null>(null);
  const createReservation = useCreateReservation();

  const onClick = useCallback(
    async (entry: ScheduleEntry) => {
      const reservation = await createReservation.mutateAsync({
        slug: slug as string,
        entry,
      });
      setReservation(reservation);
    },
    [setReservation]
  );

  return (
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Schedule Your Appointment
        </h2>
      </div>
      {reservation ? (
        <FormWrapper slug={slug as string} reservation={reservation} />
      ) : (
        <ProviderWrapper
          slug={slug as string}
          date={date as string}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default ProviderPage;
