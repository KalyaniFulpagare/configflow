interface Props {
  type: string;
}

export default function UnknownComponent({
  type,
}: Props) {
  return (
    <div className="border border-red-500 bg-red-500/10 p-4 rounded-xl">

      <p className="text-red-400 font-semibold">
        Unknown Component:
      </p>

      <p className="text-white mt-1">
        {type}
      </p>

    </div>
  );
}