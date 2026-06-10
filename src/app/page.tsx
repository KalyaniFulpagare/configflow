import Link from "next/link";

export default function HomePage() {

  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="text-center max-w-3xl px-6">

        <h1 className="text-7xl font-bold mb-6">

          ConfigFlow

        </h1>

        <p className="text-zinc-400 text-xl mb-10">

          Build metadata driven applications dynamically using JSON runtime configurations.

        </p>

        <div className="flex justify-center gap-4">

          <Link
            href="/dashboard"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >

            Open Dashboard

          </Link>

          <Link
            href="/login"
            className="border border-zinc-700 px-6 py-3 rounded-xl"
          >

            Login

          </Link>

        </div>

      </div>

    </main>
  );
}