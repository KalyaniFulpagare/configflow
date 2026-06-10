"use client";

import { AppConfig } from "@/types/config";

interface Props {
  onImport: (
    config: AppConfig
  ) => void;
}

export default function ImportConfigButton({
  onImport,
}: Props) {

  const handleImport = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      event.target.files?.[0];

    if (!file) return;

    const text =
      await file.text();

    try {

      const parsed =
        JSON.parse(text);

      onImport(parsed);

    } catch {

      alert(
        "Invalid JSON file"
      );
    }
  };

  return (
    <div className="mb-4">

      <label className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-xl cursor-pointer inline-block">

        Import Config

        <input
          type="file"

          accept=".json"

          onChange={handleImport}

          className="hidden"
        />

      </label>

    </div>
  );
}