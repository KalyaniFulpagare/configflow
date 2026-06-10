"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    const response = await fetch("/api/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      alert("User Created");

      router.push("/login");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl">

        <h1 className="text-3xl font-bold mb-6">
          Create Account
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"

            value={email}

            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"

            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"

            value={password}

            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}

            className="w-full bg-white text-black p-3 rounded font-semibold"
          >
            Register
          </button>

        </div>

      </div>

    </main>
  );
}