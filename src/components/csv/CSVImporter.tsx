"use client";

// If @types/papaparse is not installed, silence the implicit any error for this import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Papa from "papaparse";

interface Props {
  onImport: (
    rows: Record<string, string>[]
  ) => void;
}

export default function CSVImporter({
  onImport,
}: Props) {

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      event.target.files?.[0];

    if (!file) return;

    Papa.parse(file, {

      header: true,

      skipEmptyLines: true,

      complete: (results: Papa.ParseResult<Record<string, string>>) => {

        onImport(
          results.data as Record<
            string,
            string
          >[]
        );
      },
    });
  };

  return (
    <div className="mb-6">

      <label className="block mb-2 text-sm text-zinc-400">
        Import CSV
      </label>

      <input
        type="file"

        accept=".csv"

        onChange={handleFileUpload}

        className="block w-full text-sm"
      />

    </div>
  );
}