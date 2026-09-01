"use client";

import { useState } from "react";

interface CategoryChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function CategoryChip({ label, active = false, onClick }: CategoryChipProps) {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-xl text-label-lg font-display whitespace-nowrap transition-transform active:scale-95 ${
        isActive
          ? "bg-ink-900 text-bg"
          : "border border-border bg-surface-50 text-ink-900 hover:bg-surface-100 transition-colors"
      }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}