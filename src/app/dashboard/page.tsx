"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

import ConfigEditor from "@/components/editor/ConfigEditor";

import DynamicDashboard from "@/components/DynamicDashboard";

import ValidationPanel from "@/components/editor/ValidationPanel";

import CSVImporter from "@/components/csv/CSVImporter";

import SaveConfigButton from "@/components/actions/SaveConfigButton";

import ExportConfigButton from "@/components/actions/ExportConfigButton";

import ImportConfigButton from "@/components/actions/ImportConfigButton";

import SavedConfigs from "@/components/actions/SavedConfigs";

import HistoryControls from "@/components/actions/HistoryControls";

import ComponentPalette from "@/components/builder/ComponentPalette";

import BuilderCanvas from "@/components/builder/BuilderCanvas";

import PropertyEditor from "@/components/builder/PropertyEditor";

import ComponentSearch from "@/components/builder/ComponentSearch";

import StatsPanel from "@/components/builder/StatsPanel";

import TemplateSelector from "@/components/builder/TemplateSelector";

import ThemeSelector from "@/components/theme/ThemeSelector";

import Loader from "@/components/ui/Loader";

import { sampleConfig } from "@/lib/configs/sampleConfig";

import { templates } from "@/lib/configs/templates";

import { validateConfig } from "@/lib/validator/validateConfig";

import { themeClasses } from "@/lib/themes/themeClasses";

import useHistory from "@/hooks/useHistory";

import useAutoSave from "@/hooks/useAutoSave";

import useKeyboardShortcuts from "@/hooks/useKeyboardShortcuts";

import { AppConfig } from "@/types/config";

export default function DashboardPage() {

  const {
    data: session,
    status,
  } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (
      status === "unauthenticated"
    ) {
      router.push("/login");
    }
  }, [status, router]);

  const [initialConfig, setInitialConfig] =
    useState<AppConfig>(sampleConfig);

  useEffect(() => {

    if (
      typeof window === "undefined"
    ) return;

    const saved =
      localStorage.getItem(
        `configflow-autosave-${session?.user?.email || "guest"}`
      );

    if (saved) {

      try {

        setInitialConfig(
          JSON.parse(saved)
        );

      } catch {

        setInitialConfig(
          sampleConfig
        );
      }

    } else {

      setInitialConfig(
        sampleConfig
      );
    }

  }, [session]);

  const history =
    useHistory<AppConfig>(
      initialConfig
    );

  useEffect(() => {
    history.set(initialConfig);
  }, [initialConfig]);

  const config =
    history.state;

  useAutoSave(
    `configflow-autosave-${session?.user?.email || "guest"}`,
    config
  );

  const [
    configText,
    setConfigText,
  ] = useState(
    JSON.stringify(
      config,
      null,
      2
    )
  );

  const [
    selectedComponent,
    setSelectedComponent,
  ] = useState<any>(null);

  const [
    theme,
    setTheme,
  ] = useState("dark");

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  const [
    validationErrors,
    setValidationErrors,
  ] = useState<string[]>([]);

  const currentTheme =
    themeClasses[
      theme as keyof typeof themeClasses
    ];

  const handleSaveShortcut =
    async () => {

      try {

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

      } catch {}
    };

  useKeyboardShortcuts({
    onUndo: history.undo,
    onRedo: history.redo,
    onSave: handleSaveShortcut,
  });

  useEffect(() => {

    setConfigText(
      JSON.stringify(
        config,
        null,
        2
      )
    );

    const validation =
      validateConfig(config);

    setValidationErrors(
      validation.errors
    );

  }, [config]);

  const filteredConfig =
    useMemo(() => {

      if (!search.trim()) {
        return config;
      }

      return {
        ...config,

        components:
          config.components.filter(
            (component: any) =>
              component.type
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
          ),
      };

    }, [config, search]);

  const updateConfig = (
    updatedConfig: AppConfig
  ) => {

    history.set(updatedConfig);
  };

  const handleTemplateSelect = (
    templateName: string
  ) => {

    const template =
      templates[
        templateName as keyof typeof templates
      ] as AppConfig["components"];

    if (!template) return;

    const updatedConfig: AppConfig = {
      ...sampleConfig,

      components: template,
    };

    updateConfig(updatedConfig);

    setSelectedComponent(null);
  };

  const handleConfigChange = (
    value: string
  ) => {

    setConfigText(value);

    try {

      const parsed =
        JSON.parse(value);

      updateConfig(parsed);

      setError("");

    } catch {

      setError(
        "Invalid JSON Configuration"
      );
    }
  };

  const handleCSVImport = (
    rows: Record<string, string>[]
  ) => {

    if (rows.length === 0)
      return;

    const columns =
      Object.keys(rows[0]);

    const tableComponent = {
      id: crypto.randomUUID(),

      type: "table" as const,

      width: "full" as const,

      columns,

      data: rows,
    };

    const updatedConfig: AppConfig = {
      ...config,

      components: [
        ...config.components,
        tableComponent,
      ],
    };

    updateConfig(updatedConfig);
  };

  const handleLoadConfig = (
    loadedConfig: AppConfig
  ) => {

    updateConfig(loadedConfig);

    setSelectedComponent(null);
  };

  const handleAddComponent = (
    type: string
  ) => {

    const newComponent: any = {
      id: crypto.randomUUID(),

      type,

      width: "full",
    };

    const updatedConfig = {
      ...config,

      components: [
        ...config.components,
        newComponent,
      ],
    };

    updateConfig(updatedConfig);
  };

  const handleUpdateProperty = (
    key: string,
    value: string
  ) => {

    if (!selectedComponent)
      return;

    const updatedComponents =
      config.components.map(
        (component: any) => {

          if (
            component.id ===
            selectedComponent.id
          ) {

            return {
              ...component,

              [key]: value,
            };
          }

          return component;
        }
      );

    const updatedConfig = {
      ...config,

      components:
        updatedComponents,
    };

    updateConfig(updatedConfig);
  };

  const handleDeleteComponent = (
    id: string
  ) => {

    const updatedComponents =
      config.components.filter(
        (component: any) =>
          component.id !== id
      );

    const updatedConfig = {
      ...config,

      components:
        updatedComponents,
    };

    updateConfig(updatedConfig);
  };

  const handleReorderComponents = (
    activeId: string,
    overId: string
  ) => {

    const oldIndex =
      config.components.findIndex(
        (component: any) =>
          component.id === activeId
      );

    const newIndex =
      config.components.findIndex(
        (component: any) =>
          component.id === overId
      );

    const updatedComponents = [
      ...config.components,
    ];

    const [movedItem] =
      updatedComponents.splice(
        oldIndex,
        1
      );

    updatedComponents.splice(
      newIndex,
      0,
      movedItem
    );

    const updatedConfig = {
      ...config,

      components:
        updatedComponents,
    };

    updateConfig(updatedConfig);
  };

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <main
      className={`min-h-screen transition ${currentTheme.background} ${currentTheme.text}`}
    >

      <div className="grid grid-cols-2 gap-6 p-6">

        <div
          className={`pr-6 overflow-auto h-screen border-r ${currentTheme.border}`}
        >

          <div className="mb-4 text-sm text-zinc-400">

            Logged in as:
            {" "}
            {session?.user?.email}

          </div>

          <div className="flex flex-wrap gap-3 mb-4">

            <SaveConfigButton
              config={config}
            />

            <ExportConfigButton
              config={config}
            />

            <ImportConfigButton
              onImport={
                handleLoadConfig
              }
            />

          </div>

          <HistoryControls
            onUndo={history.undo}
            onRedo={history.redo}
            canUndo={history.canUndo}
            canRedo={history.canRedo}
          />

          <ThemeSelector
            theme={theme}
            onChange={setTheme}
          />

          <StatsPanel
            config={config}
          />

          <TemplateSelector
            onSelect={
              handleTemplateSelect
            }
          />

          <ComponentSearch
            search={search}
            onChange={setSearch}
          />

          <SavedConfigs
            onSelect={
              handleLoadConfig
            }
          />

          <ComponentPalette
            onAdd={
              handleAddComponent
            }
          />

          <BuilderCanvas
            config={filteredConfig}
            onSelect={
              setSelectedComponent
            }
            onDelete={
              handleDeleteComponent
            }
            onReorder={
              handleReorderComponents
            }
            selectedId={
              selectedComponent?.id || ""
            }
          />

          <PropertyEditor
            selectedComponent={
              selectedComponent
            }
            onUpdate={
              handleUpdateProperty
            }
          />

          <CSVImporter
            onImport={
              handleCSVImport
            }
          />

          <ConfigEditor
            value={configText}
            onChange={
              handleConfigChange
            }
            error={error}
          />

          <ValidationPanel
            errors={
              validationErrors
            }
          />

        </div>

        <div className="overflow-auto h-screen p-4">

          <DynamicDashboard
            config={filteredConfig}
          />

        </div>

      </div>

    </main>
  );
}