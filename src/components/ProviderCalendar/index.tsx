import { DateTime } from "luxon";

import Avatar from "@/components/Avatar";
import { useProvider } from "@/hooks/api";
import { useNavigateTo } from "@/helpers/navigation";

import Calendar from "./Calendar";

export type Props = {
  slug: string;
};

export default function Provider({ slug }: Props) {
  const { data, isLoading } = useProvider(slug);
  const navigateTo = useNavigateTo();

  const onClick = (date: DateTime) =>
    navigateTo(`/provider/${slug}/schedule/${date.toFormat("yyyy-MM-dd")}`);
  return (
    <>
      {!isLoading && data ? (
        <>
          <Avatar
            title={data.name}
            subtitle={data.position}
            imageUrl={data.imageUrl}
          />
          <div className="flex flex-col items-center">
            <Calendar availableDates={data.availableDates} onClick={onClick} />
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}
