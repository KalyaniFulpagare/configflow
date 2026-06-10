import { TextAreaComponent } from "@/types/config";

interface Props {
  component: TextAreaComponent;
}

export default function TextAreaField({
  component,
}: Props) {
  return (
    <div className="space-y-2">

      <label className="text-sm text-zinc-300">
        {component.label}
      </label>

      <textarea
        placeholder={component.placeholder}

        className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 min-h-[120px]"
      />

    </div>
  );
}