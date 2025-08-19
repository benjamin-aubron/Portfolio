"use client";

import { useEffect, useState } from "react";

const CursorHalo = ({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLDivElement>;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHalo = (e: MouseEvent) => {
      if (!parentRef.current) return;

      const rect = parentRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - 64;
      const y = e.clientY - rect.top - 64;

      setPosition({
        x: x,
        y: y,
      });
    };

    parentRef.current?.addEventListener("mousemove", moveHalo);
    return () => parentRef.current?.removeEventListener("mousemove", moveHalo);
  }, [parentRef]);

  return (
    <div
      className="absolute w-24 h-24 bg-[--primaryColor] pointer-events-none opacity-100 blur-3xl rounded-full"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default CursorHalo;
