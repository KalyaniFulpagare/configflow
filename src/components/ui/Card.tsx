import { ReactNode } from "react";

interface Props {

  children: ReactNode;

  className?: string;
}

export default function Card({
  children,
  className = "",
}: Props) {

  return (

    <div
      className={`border border-zinc-800 rounded-2xl p-4 bg-zinc-950 ${className}`}
    >

      {children}

    </div>
  );
}