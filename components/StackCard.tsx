"use client"

import { useRef, useState } from "react";
import CursorHalo from "@/components/CursorHalo";
import { Stack } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function StackCard({ stack }: { stack: Stack }) {
  const [isOverStack, setIsOverStack] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const t = useTranslations("stack");
  
  return (
    <div
      ref={cardRef}
      className="relative border-[1px] border-neutral-800 hover:border-tertiary rounded-2xl p-4 h-full overflow-hidden"
      onMouseOver={() => setIsOverStack(true)}
      onMouseLeave={() => setIsOverStack(false)}
    >
      {isOverStack && <CursorHalo parentRef={cardRef} />}
      <div className="pb-3">{stack.icon}</div>
      <h3 className="font-semibold text-neutral-100 text-2xl pb-2">{stack.name}</h3>
      <div>{t(stack.id)}</div>
    </div>
  );
}
