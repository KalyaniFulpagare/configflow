"use client";

interface Props {
  onSelect: (
    template: string
  ) => void;
}

export default function TemplateSelector({
  onSelect,
}: Props) {

  return (
    <div className="border border-zinc-800 rounded-2xl p-4 mb-6">

      <h2 className="text-xl font-bold mb-4">
        Templates
      </h2>

      <div className="flex flex-wrap gap-3">

        <button
          onClick={() =>
            onSelect("crm")
          }

          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl"
        >

          CRM Template

        </button>

        <button
          onClick={() =>
            onSelect("analytics")
          }

          className="bg-pink-600 hover:bg-pink-500 px-4 py-2 rounded-xl"
        >

          Analytics Template

        </button>

        <button
          onClick={() =>
            onSelect("team")
          }

          className="bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-xl"
        >

          Team Template

        </button>

      </div>

    </div>
  );
}