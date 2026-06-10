import Renderer from "@/components/renderers/Renderer";

import { AppConfig } from "@/types/config";

interface Props {
  config: AppConfig;
}

export default function DynamicDashboard({
  config,
}: Props) {

  const isGrid =
    config.layout === "grid";

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-5xl font-bold">
          {config.title}
        </h1>

        <p className="text-zinc-400 mt-3">
          Metadata Driven Application Runtime
        </p>

      </div>

      <div
        className={
          isGrid
            ? "grid grid-cols-2 gap-6"
            : "space-y-6"
        }
      >

        {config.components.map(
          (component) => (

            <div
              key={component.id}

              className={
                component.width ===
                "full"
                  ? "col-span-2"
                  : ""
              }
            >

              <Renderer
                component={component}
              />

            </div>
          )
        )}

      </div>

    </div>
  );
}