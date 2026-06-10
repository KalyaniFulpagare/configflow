interface Props {
  onAdd: (type: string) => void;
}

const componentTypes = [
  "text",
  "email",
  "textarea",
  "number",
  "card",
];

export default function ComponentPalette({
  onAdd,
}: Props) {

  return (
    <div className="border border-zinc-800 rounded-2xl p-4 mb-6">

      <h2 className="text-xl font-bold mb-4">
        Component Builder
      </h2>

      <div className="flex flex-wrap gap-3">

        {componentTypes.map((type) => (

          <button
            key={type}

            onClick={() =>
              onAdd(type)
            }

            className="bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-xl capitalize"
          >

            Add {type}

          </button>
        ))}

      </div>

    </div>
  );
}