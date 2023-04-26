import { useMemo } from "react";
import { DateTime } from "luxon";

import Avatar from "@/components/Avatar";
import { Provider, Reservation } from "@/types";

export type Props = {
  provider: Provider;
  reservation: Reservation;
  onSubmit: () => void;
  isConfirmed?: boolean;
};

export default function ConfirmForm({
  provider,
  reservation,
  onSubmit,
  isConfirmed,
}: Props) {
  const { startTime, endTime } = useMemo(
    () => ({
      startTime: DateTime.fromISO(reservation.startTime),
      endTime: DateTime.fromISO(reservation.endTime),
    }),
    [reservation]
  );
  return (
    <>
      <Avatar
        title={provider.name}
        subtitle={provider.position}
        imageUrl={provider.imageUrl}
      />
      <div className="flex flex-col items-center">
        {isConfirmed ? (
          <div>Confirmed!</div>
        ) : (
          <>
            <div>Start time: {startTime.toFormat("HH:mm")}</div>
            <div>End time: {endTime.toFormat("HH:mm")}</div>
            <button
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onSubmit}
            >
              CONFIRM
            </button>
          </>
        )}
      </div>
    </>
  );
}
