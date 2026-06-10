import { AppConfig } from "@/types/config";

export const sampleConfig: AppConfig = {

  title: "CRM Dashboard",

  layout: "grid",

  components: [

    {
      id: "1",

      type: "card",

      width: "full",

      title: "Welcome to ConfigFlow",

      description:
        "This UI is generated dynamically from JSON configuration.",
    },

    {
      id: "2",

      type: "text",

      width: "half",

      label: "Full Name",

      placeholder: "Enter your name",
    },

    {
      id: "3",

      type: "email",

      width: "half",

      label: "Email Address",
    },

    {
      id: "4",

      type: "textarea",

      width: "full",

      label: "Project Description",

      placeholder:
        "Describe your project...",
    },

    {
      id: "5",

      type: "number",

      width: "half",

      label: "Team Size",
    },

    {
      id: "6",

      type: "table",

      width: "full",

      columns: [
        "name",
        "role",
        "experience",
      ],

      data: [
        {
          name: "John",
          role: "Frontend",
          experience: 2,
        },

        {
          name: "Sarah",
          role: "Backend",
          experience: 4,
        },
      ],
    },

    {
      id: "7",

      type: "unknown_component",
    } as any,
  ],
};