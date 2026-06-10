"use client";

interface Props {
  theme: string;

  onChange: (
    theme: string
  ) => void;
}

const themes = [
  "dark",
  "light",
  "blue",
];

export default function ThemeSelector({
  theme,
  onChange,
}: Props) {

  return (
    <div className="border border-zinc-800 rounded-2xl p-4 mb-6">

      <h2 className="text-xl font-bold mb-4">
        Theme Selector
      </h2>

      <div className="flex gap-3 flex-wrap">

        {themes.map((item) => (

          <button
            key={item}

            onClick={() =>
              onChange(item)
            }

            className={`px-4 py-2 rounded-xl capitalize border ${
              theme === item
                ? "bg-white text-black"
                : "bg-zinc-900 text-white border-zinc-700"
            }`}
          >

            {item}

          </button>
        ))}

      </div>

    </div>
  );
}