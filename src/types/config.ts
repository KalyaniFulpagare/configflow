export type ComponentType =
  | "text"
  | "textarea"
  | "number"
  | "email"
  | "table"
  | "card";

export type ComponentWidth =
  | "full"
  | "half";

export interface BaseComponent {
  id: string;

  type: ComponentType;

  width?: ComponentWidth;
}

export interface TextComponent
  extends BaseComponent {

  type: "text";

  label: string;

  placeholder?: string;
}

export interface TextAreaComponent
  extends BaseComponent {

  type: "textarea";

  label: string;

  placeholder?: string;
}

export interface NumberComponent
  extends BaseComponent {

  type: "number";

  label: string;
}

export interface EmailComponent
  extends BaseComponent {

  type: "email";

  label: string;
}

export interface CardComponent
  extends BaseComponent {

  type: "card";

  title: string;

  description?: string;
}

export interface TableComponent
  extends BaseComponent {

  type: "table";

  columns: string[];

  data: Record<
    string,
    string | number
  >[];
}

export type AppComponent =
  | TextComponent
  | TextAreaComponent
  | NumberComponent
  | EmailComponent
  | CardComponent
  | TableComponent;

export interface AppConfig {
  title: string;

  layout?: "stack" | "grid";

  components: AppComponent[];
}