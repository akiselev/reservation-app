import { Provider } from "@/types";
import Avatar from "@/components/Avatar";

import Schedule, { ScheduleSlot } from "./Schedule";

export type Props = {
  provider: Provider;
  slots: ScheduleSlot[];
};

export default function ProviderSchedule({ provider, slots }: Props) {
  return (
    <>
      <Avatar
        title={provider.name}
        subtitle={provider.position}
        imageUrl={provider.imageUrl}
      />
      <div className="flex flex-col items-center">
        <Schedule slots={slots} />
      </div>
    </>
  );
}
