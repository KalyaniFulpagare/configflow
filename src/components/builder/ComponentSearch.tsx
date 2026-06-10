"use client";

interface Props {
  search: string;

  onChange: (
    value: string
  ) => void;
}

export default function ComponentSearch({
  search,
  onChange,
}: Props) {

  return (
    <div className="border border-zinc-800 rounded-2xl p-4 mb-6">

      <h2 className="text-xl font-bold mb-4">
        Search Components
      </h2>

      <input
        type="text"

        value={search}

        onChange={(e) =>
          onChange(e.target.value)
        }

        placeholder="Search by type..."

        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none"
      />

    </div>
  );
}