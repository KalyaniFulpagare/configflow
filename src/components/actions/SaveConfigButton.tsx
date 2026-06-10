"use client";

import { AppConfig } from "@/types/config";

interface Props {
  config: AppConfig;
}

export default function SaveConfigButton({
  config,
}: Props) {

  const handleSave =
    async () => {

      try {

        const response =
          await fetch(
            "/api/configs",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                name: "Runtime Config",

                content: config,
              }),
            }
          );

        if (!response.ok) {

          throw new Error();
        }

        alert(
          "Config saved successfully"
        );

      } catch {

        alert(
          "Failed to save config"
        );
      }
    };

  return (
    <button
      onClick={handleSave}

      className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-xl"
    >

      Save Config

    </button>
  );
}