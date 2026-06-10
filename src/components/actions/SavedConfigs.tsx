"use client";

import { useEffect, useState } from "react";

interface Props {
  onSelect: (config: any) => void;
}

export default function SavedConfigs({
  onSelect,
}: Props) {

  const [configs, setConfigs] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchConfigs();

  }, []);

  const fetchConfigs = async () => {

    try {

      const response =
        await fetch("/api/configs");

      const data =
        await response.json();

      setConfigs(data);

    } catch {

      console.log(
        "Failed to fetch configs"
      );

    } finally {

      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mb-6">
        Loading configs...
      </div>
    );
  }

  return (
    <div className="mb-6">

      <h2 className="text-xl font-bold mb-3">
        Saved Configs
      </h2>

      <div className="space-y-2">

        {configs.map((config) => (

          <button
            key={config.id}

            onClick={() =>
              onSelect(config.content)
            }

            className="w-full text-left border border-zinc-800 rounded-xl p-3 hover:bg-zinc-900"
          >

            <p className="font-medium">
              {config.name}
            </p>

            <p className="text-xs text-zinc-500 mt-1">
              {new Date(
                config.createdAt
              ).toLocaleString()}
            </p>

          </button>
        ))}

      </div>

    </div>
  );
}