"use client";

import Link from "next/link";

import { signOut, useSession } from "next-auth/react";

export default function Navbar() {

  const { data: session } =
    useSession();

  return (

    <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between bg-black">

      <Link
        href="/"
        className="font-bold text-xl"
      >

        ConfigFlow

      </Link>

      <div className="flex items-center gap-4">

        {session?.user?.email && (

          <span className="text-sm text-zinc-400">

            {session.user.email}

          </span>
        )}

        <Link href="/dashboard">

          Dashboard

        </Link>

        {!session ? (

          <>
            <Link href="/login">

              Login

            </Link>

            <Link href="/register">

              Register

            </Link>
          </>

        ) : (

          <button
            onClick={() =>
              signOut()
            }
            className="bg-white text-black px-4 py-2 rounded-xl"
          >

            Logout

          </button>
        )}

      </div>

    </nav>
  );
}