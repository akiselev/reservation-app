import { DateTime } from "luxon";
import Calendar from "react-calendar";
import { TileClassNameFunc } from "react-calendar/dist/cjs/shared/types";

export type Props = {
  availableDates: string[];
  onClick: (date: DateTime) => void;
};

export default function ProviderCalendar({ availableDates, onClick }: Props) {
  const tileClassName: TileClassNameFunc = ({ date, view }) => {
    // Add class to tiles in month view only on days where the provider is available
    if (view === "month") {
      const dateString = DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
      const isProviderAvailable = availableDates.find(
        (dDate) => dDate == dateString
      );
      if (isProviderAvailable) {
        return "react-calendar__tile--available";
      }
    }
  };

  const onClickDay = (date: Date) => onClick(DateTime.fromJSDate(date));

  return (
    <Calendar
      tileClassName={tileClassName}
      value={null}
      onClickDay={onClickDay}
    />
  );
}
