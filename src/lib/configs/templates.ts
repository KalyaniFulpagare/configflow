export const templates = {

  crm: [
    {
      id: crypto.randomUUID(),

      type: "card",

      width: "full",

      title: "CRM Overview",

      description:
        "Customer management dashboard",
    },

    {
      id: crypto.randomUUID(),

      type: "text",

      width: "half",

      label: "Customer Name",

      placeholder:
        "Enter customer name",
    },

    {
      id: crypto.randomUUID(),

      type: "email",

      width: "half",

      label: "Customer Email",
    },
  ],

  analytics: [
    {
      id: crypto.randomUUID(),

      type: "card",

      width: "full",

      title: "Analytics",

      description:
        "Business analytics overview",
    },

    {
      id: crypto.randomUUID(),

      type: "number",

      width: "half",

      label: "Revenue",
    },

    {
      id: crypto.randomUUID(),

      type: "number",

      width: "half",

      label: "Growth %",
    },
  ],

  team: [
    {
      id: crypto.randomUUID(),

      type: "card",

      width: "full",

      title: "Team Management",

      description:
        "Manage your organization",
    },

    {
      id: crypto.randomUUID(),

      type: "table",

      width: "full",

      columns: [
        "name",
        "role",
        "experience",
      ],

      data: [
        {
          name: "Alex",

          role: "Developer",

          experience: 4,
        },

        {
          name: "Emma",

          role: "Designer",

          experience: 3,
        },
      ],
    },
  ],
};