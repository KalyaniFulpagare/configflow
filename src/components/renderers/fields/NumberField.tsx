import { NumberComponent } from "@/types/config";

interface Props {
  component: NumberComponent;
}

export default function NumberField({
  component,
}: Props) {
  return (
    <div className="space-y-2">

      <label className="text-sm text-zinc-300">
        {component.label}
      </label>

      <input
        type="number"

        className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
      />

    </div>
  );
}