"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const templates = {
  ecommerce: {
    projectName: "Ecommerce App",
    theme: "dark",
    paymentGateway: "Stripe",
    analytics: true,
  },

  portfolio: {
    projectName: "Portfolio Website",
    theme: "light",
    animations: true,
    contactForm: true,
  },

  saas: {
    projectName: "SaaS Platform",
    theme: "dark",
    authentication: true,
    subscriptions: true,
  },
};

export default function DashboardPage() {
  const { data: session } = useSession();

  const [config, setConfig] = useState<Record<string, any>>({});
  const [search, setSearch] = useState("");

  const userEmail =
    session?.user?.email || "guest";

  const storageKey = "configflow-" + userEmail;

  const stringifyValue = (value: unknown) => {
    if (value === null || value === undefined) return "";
    if (typeof value === "object") return JSON.stringify(value);
    return `${value}`;
  };

  // LOAD USER DATA
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConfig(parsed && typeof parsed === "object" ? parsed : {});
      } catch {
        setConfig({});
      }
    } else {
      setConfig({});
    }
  }, [storageKey]);

  // AUTO SAVE
  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(config)
    );
  }, [config, storageKey]);

  // TEMPLATE SELECT
  const handleTemplateSelect = (
    template: keyof typeof templates
  ) => {
    setConfig(templates[template]);
  };

  // SEARCH
  const filteredEntries = Object.entries(config ?? {}).filter(
    ([key]) =>
      key.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-2">
        ConfigFlow Dashboard
      </h1>

      <p className="text-zinc-400 mb-8">
        Logged in as: {userEmail}
      </p>

      {/* TEMPLATE SECTION */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Templates
        </h2>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() =>
              handleTemplateSelect("ecommerce")
            }
            className="bg-pink-600 hover:bg-pink-700 px-5 py-3 rounded-lg transition"
          >
            Ecommerce Template
          </button>

          <button
            onClick={() =>
              handleTemplateSelect("portfolio")
            }
            className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-lg transition"
          >
            Portfolio Template
          </button>

          <button
            onClick={() =>
              handleTemplateSelect("saas")
            }
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition"
          >
            SaaS Template
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by component..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-3 rounded-lg text-black"
        />
      </div>

      {/* CONFIGURATION VIEW */}
      <div className="grid gap-4">
        {filteredEntries.length > 0 ? (
          filteredEntries.map(([key, value]) => (
            <div
              key={key}
              className="bg-zinc-900 p-5 rounded-xl border border-zinc-700"
            >
              <h3 className="text-xl font-semibold">
                {key}
              </h3>

              <p className="text-zinc-300 mt-2">
                {stringifyValue(value)}
              </p>
            </div>
          ))
        ) : (
          <div className="text-zinc-500">
            No configurations found
          </div>
        )}
      </div>

      {/* AUTOSAVE */}
      <div className="mt-10 text-green-400">
        Auto-save enabled
      </div>
    </div>
  );
}