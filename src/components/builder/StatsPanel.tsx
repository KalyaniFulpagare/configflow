"use client";

import { AppConfig } from "@/types/config";

interface Props {
  config: AppConfig;
}

export default function StatsPanel({
  config,
}: Props) {

  const totalComponents =
    config.components.length;

  const totalFields =
    config.components.filter(
      (component: any) =>
        [
          "text",
          "email",
          "number",
          "textarea",
        ].includes(component.type)
    ).length;

  const totalTables =
    config.components.filter(
      (component: any) =>
        component.type === "table"
    ).length;

  const totalCards =
    config.components.filter(
      (component: any) =>
        component.type === "card"
    ).length;

  const uniqueTypes =
    new Set(
      config.components.map(
        (component: any) =>
          component.type
      )
    ).size;

  return (
    <div className="border border-zinc-800 rounded-2xl p-4 mb-6">

      <h2 className="text-xl font-bold mb-4">

        Runtime Statistics

      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-sm text-zinc-400">
            Components
          </p>

          <h3 className="text-2xl font-bold">
            {totalComponents}
          </h3>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-sm text-zinc-400">
            Fields
          </p>

          <h3 className="text-2xl font-bold">
            {totalFields}
          </h3>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-sm text-zinc-400">
            Tables
          </p>

          <h3 className="text-2xl font-bold">
            {totalTables}
          </h3>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-sm text-zinc-400">
            Cards
          </p>

          <h3 className="text-2xl font-bold">
            {totalCards}
          </h3>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-sm text-zinc-400">
            Unique Types
          </p>

          <h3 className="text-2xl font-bold">
            {uniqueTypes}
          </h3>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-sm text-zinc-400">
            Layout
          </p>

          <h3 className="text-xl font-bold capitalize">
            {config.layout}
          </h3>
        </div>

      </div>

    </div>
  );
}