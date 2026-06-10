import { AppConfig } from "@/types/config";

export interface ValidationResult {
  valid: boolean;

  errors: string[];
}

export function validateConfig(
  config: AppConfig
): ValidationResult {

  const errors: string[] = [];

  if (!config.title) {
    errors.push(
      "Missing app title"
    );
  }

  if (
    !Array.isArray(config.components)
  ) {
    errors.push(
      "Components must be an array"
    );
  }

  config.components?.forEach(
    (component: any, index: number) => {

      if (!component.id) {
        errors.push(
          `Component at index ${index} is missing id`
        );
      }

      if (!component.type) {
        errors.push(
          `Component ${component.id} is missing type`
        );
      }

      switch (component.type) {

        case "text":
        case "textarea":
        case "email":
        case "number":

          if (
            !(component as any).label
          ) {
            errors.push(
              `${component.type} component requires label`
            );
          }

          break;

        case "card":

          if (
            !(component as any).title
          ) {
            errors.push(
              `Card component requires title`
            );
          }

          break;

        case "table":

          if (
            !(component as any).columns
          ) {
            errors.push(
              `Table component requires columns`
            );
          }

          if (
            !(component as any).data
          ) {
            errors.push(
              `Table component requires data`
            );
          }

          break;

        default:

          errors.push(
            `Unknown component type: ${(component as any).type}`
          );
      }
    }
  );

  return {
    valid:
      errors.length === 0,

    errors,
  };
}