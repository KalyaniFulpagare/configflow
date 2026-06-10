interface Props {
  errors: string[];
}

export default function ValidationPanel({
  errors,
}: Props) {

  if (errors.length === 0) {
    return (
      <div className="mt-4 border border-green-500 bg-green-500/10 rounded-xl p-4">

        <p className="text-green-400">
          Config Valid
        </p>

      </div>
    );
  }

  return (
    <div className="mt-4 border border-red-500 bg-red-500/10 rounded-xl p-4">

      <h3 className="text-red-400 font-semibold mb-2">
        Validation Errors
      </h3>

      <ul className="space-y-2">

        {errors.map((error, index) => (
          <li
            key={index}

            className="text-sm text-red-300"
          >
            • {error}
          </li>
        ))}

      </ul>

    </div>
  );
}