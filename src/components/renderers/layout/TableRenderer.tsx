import { TableComponent } from "@/types/config";

interface Props {
  component: TableComponent;
}

export default function TableRenderer({
  component,
}: Props) {
  return (
    <div className="overflow-auto rounded-xl border border-zinc-800">

      <table className="w-full">

        <thead className="bg-zinc-900">

          <tr>
            {component.columns.map((column) => (
              <th
                key={column}

                className="p-4 text-left border-b border-zinc-800"
              >
                {column}
              </th>
            ))}
          </tr>

        </thead>

        <tbody>

          {component.data.map((row, index) => (
            <tr
              key={index}

              className="border-b border-zinc-800"
            >
              {component.columns.map((column) => (
                <td
                  key={column}

                  className="p-4"
                >
                  {String(row[column])}
                </td>
              ))}
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}