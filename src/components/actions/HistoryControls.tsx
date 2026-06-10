"use client";

interface Props {
  onUndo: () => void;

  onRedo: () => void;

  canUndo: boolean;

  canRedo: boolean;
}

export default function HistoryControls({
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}: Props) {

  return (
    <div className="flex gap-3 mb-4">

      <button
        onClick={onUndo}

        disabled={!canUndo}

        className="bg-yellow-600 hover:bg-yellow-500 disabled:opacity-40 px-4 py-2 rounded-xl"
      >

        Undo

      </button>

      <button
        onClick={onRedo}

        disabled={!canRedo}

        className="bg-purple-600 hover:bg-purple-500 disabled:opacity-40 px-4 py-2 rounded-xl"
      >

        Redo

      </button>

    </div>
  );
}