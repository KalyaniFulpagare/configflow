interface Props {
  title: string;

  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {

  return (
    <div className="border border-dashed border-zinc-700 rounded-2xl p-10 text-center">

      <h2 className="text-xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-zinc-400">
        {description}
      </p>

    </div>
  );
}