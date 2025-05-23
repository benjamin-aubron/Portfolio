"use client"

import { useRef, useState } from "react";
import CursorHalo from "@/components/CursorHalo";
import { Stack } from "@/types/types";
import { useScopedI18n } from "../../public/locales/client";


export default function StackCard({ stack }: { stack: Stack }) {
  const t = useScopedI18n("stack");
  const [isOverStack, setIsOverStack] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  
  return (
    <div
      ref={cardRef}
      className="relative border border-neutral-800 hover:border-[--tertiaryColor] rounded-2xl p-4 h-full overflow-hidden"
      onMouseOver={() => setIsOverStack(true)}
      onMouseLeave={() => setIsOverStack(false)}
    >
      {isOverStack && <CursorHalo parentRef={cardRef} />}
      <div className="pb-3">{stack.icon}</div>
      <h3 className="font-semibold text-neutral-100 text-2xl pb-2">{stack.name}</h3>
      <div>{t(stack.description as "next" | "tailwind" | "typescript" | "auth")}</div>
    </div>
  );
}
