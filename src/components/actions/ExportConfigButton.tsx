"use client";

import { AppConfig } from "@/types/config";

interface Props {
  config: AppConfig;
}

export default function ExportConfigButton({
  config,
}: Props) {

  const handleExport = () => {

    const blob = new Blob(
      [
        JSON.stringify(
          config,
          null,
          2
        ),
      ],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "configflow-config.json";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}

      className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl mb-4 mr-3"
    >

      Export Config

    </button>
  );
}