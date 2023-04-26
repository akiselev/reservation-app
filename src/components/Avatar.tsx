export type Props = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

export default function Avatar({ title, subtitle, imageUrl }: Props) {
  return (
    <div className="flex items-center gap-x-6">
      <img className="h-16 w-16 rounded-full" src={imageUrl} alt="" />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          {title}
        </h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
