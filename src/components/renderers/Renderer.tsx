import { AppComponent } from "@/types/config";

import { componentRegistry } from "@/lib/registry/componentRegistry";

import UnknownComponent from "./shared/UnknownComponent";

interface Props {
  component: AppComponent;
}

export default function Renderer({
  component,
}: Props) {

  const DynamicComponent =
    componentRegistry[
      component.type as keyof typeof componentRegistry
    ] as React.ComponentType<{ component: AppComponent }>;

  if (!DynamicComponent) {
    return (
      <UnknownComponent
        type={component.type}
      />
    );
  }

  return (
    <DynamicComponent
      component={component}
    />
  );
}