import TextField from "@/components/renderers/fields/TextField";
import TextAreaField from "@/components/renderers/fields/TextAreaField";
import EmailField from "@/components/renderers/fields/EmailField";
import NumberField from "@/components/renderers/fields/NumberField";

import CardRenderer from "@/components/renderers/layout/CardRenderer";
import TableRenderer from "@/components/renderers/layout/TableRenderer";

export const componentRegistry = {
  text: TextField,

  textarea: TextAreaField,

  email: EmailField,

  number: NumberField,

  card: CardRenderer,

  table: TableRenderer,
};