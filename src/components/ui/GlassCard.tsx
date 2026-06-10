import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GlassCard({
  children,
}: Props) {

  return (
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">

      {children}

    </div>
  );
}