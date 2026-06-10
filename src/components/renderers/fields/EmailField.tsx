import { EmailComponent } from "@/types/config";

interface Props {
  component: EmailComponent;
}

export default function EmailField({
  component,
}: Props) {
  return (
    <div className="space-y-2">

      <label className="text-sm text-zinc-300">
        {component.label}
      </label>

      <input
        type="email"

        className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
      />

    </div>
  );
}