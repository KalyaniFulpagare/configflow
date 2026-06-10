"use client";

import Link from "next/link";

export default function Sidebar() {

  return (
    <aside className="w-64 border-r border-zinc-800 h-screen sticky top-0 p-6 hidden lg:block">

      <h2 className="text-2xl font-bold mb-8">
        ConfigFlow
      </h2>

      <div className="flex flex-col gap-4">

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/login">
          Login
        </Link>

        <Link href="/register">
          Register
        </Link>

      </div>

    </aside>
  );
}