"use client";

import { AppConfig } from "@/types/config";

interface Props {
  value: string;

  onChange: (value: string) => void;

  error?: string;
}

export default function ConfigEditor({
  value,
  onChange,
  error,
}: Props) {

  return (
    <div className="h-full flex flex-col">

      <div className="mb-4">

        <h2 className="text-2xl font-bold">
          Config Editor
        </h2>

        <p className="text-zinc-400 text-sm mt-1">
          Edit JSON configuration live
        </p>

      </div>

      <textarea
        value={value}

        onChange={(e) =>
          onChange(e.target.value)
        }

        className="flex-1 min-h-[700px] bg-zinc-950 border border-zinc-800 rounded-xl p-4 font-mono text-sm"

        spellCheck={false}
      />

      {error && (
        <div className="mt-4 bg-red-500/10 border border-red-500 rounded-xl p-4">

          <p className="text-red-400 text-sm">
            {error}
          </p>

        </div>
      )}

    </div>
  );
}