"use client";

interface Props {
  selectedComponent: any;

  onUpdate: (
    key: string,
    value: string
  ) => void;
}

export default function PropertyEditor({
  selectedComponent,
  onUpdate,
}: Props) {

  if (!selectedComponent) {

    return (
      <div className="border border-zinc-800 rounded-2xl p-4 mb-6">

        <p className="text-zinc-500">
          Select a component
        </p>

      </div>
    );
  }

  return (
    <div className="border border-zinc-800 rounded-2xl p-4 mb-6">

      <h2 className="text-xl font-bold mb-4">
        Property Editor
      </h2>

      <div className="space-y-4">

        {"label" in selectedComponent && (

          <div>

            <label className="block mb-1 text-sm">
              Label
            </label>

            <input
              value={
                selectedComponent.label
              }

              onChange={(e) =>
                onUpdate(
                  "label",
                  e.target.value
                )
              }

              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2"
            />

          </div>
        )}

        {"placeholder" in selectedComponent && (

          <div>

            <label className="block mb-1 text-sm">
              Placeholder
            </label>

            <input
              value={
                selectedComponent.placeholder
              }

              onChange={(e) =>
                onUpdate(
                  "placeholder",
                  e.target.value
                )
              }

              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2"
            />

          </div>
        )}

        {"title" in selectedComponent && (

          <div>

            <label className="block mb-1 text-sm">
              Title
            </label>

            <input
              value={
                selectedComponent.title
              }

              onChange={(e) =>
                onUpdate(
                  "title",
                  e.target.value
                )
              }

              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2"
            />

          </div>
        )}

        {"description" in selectedComponent && (

          <div>

            <label className="block mb-1 text-sm">
              Description
            </label>

            <textarea
              value={
                selectedComponent.description
              }

              onChange={(e) =>
                onUpdate(
                  "description",
                  e.target.value
                )
              }

              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2"
            />

          </div>
        )}

      </div>

    </div>
  );
}