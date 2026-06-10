import { CardComponent } from "@/types/config";

interface Props {
  component: CardComponent;
}

export default function CardRenderer({
  component,
}: Props) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">

      <h2 className="text-2xl font-bold">
        {component.title}
      </h2>

      <p className="text-zinc-400 mt-2">
        {component.description}
      </p>

    </div>
  );
}