"use client";

import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.ok) {
      router.push("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl">

        <h1 className="text-3xl font-bold mb-6">
          Login
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
            onClick={handleLogin}

            className="w-full bg-white text-black p-3 rounded font-semibold"
          >
            Login
          </button>

        </div>

      </div>

    </main>
  );
}