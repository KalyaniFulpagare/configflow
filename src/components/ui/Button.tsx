import { ReactNode } from "react";

interface Props {

  children: ReactNode;

  onClick?: () => void;

  className?: string;

  type?: "button" | "submit";
}

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: Props) {

  return (

    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl bg-white text-black font-semibold hover:opacity-80 transition ${className}`}
    >

      {children}

    </button>
  );
}