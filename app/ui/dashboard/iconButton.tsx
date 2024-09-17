"use client";

import { Tooltip } from "@nextui-org/react";

interface IconButtonProps {
  ariaLabel: string;
  onClick: () => void;
  icon: React.ReactNode;
  tooltipContent: string;
  className?: string;
}

export function IconButton({
  ariaLabel,
  onClick,
  icon,
  tooltipContent,
  className = "",
}: IconButtonProps) {
  return (
    <Tooltip content={tooltipContent}>
      <button aria-label={ariaLabel} className={className} onClick={onClick}>
        {icon}
      </button>
    </Tooltip>
  );
}
