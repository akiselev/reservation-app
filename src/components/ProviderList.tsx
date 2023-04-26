import Link from "next/link";

import { Provider } from "@/types";
import Avatar from "@/components/Avatar";

export type Props = {
  providers: Provider[];
};

const ProviderList: React.FC<Props> = ({ providers }: Props) => {
  return (
    <ul
      role="list"
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
    >
      {providers.map(({ name, slug, position, imageUrl }) => (
        <li key={name}>
          <Link href={`/provider/${slug}`}>
            <Avatar title={name} subtitle={position} imageUrl={imageUrl} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProviderList;
