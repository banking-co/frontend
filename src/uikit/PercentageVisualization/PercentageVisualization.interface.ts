import type { FC, HTMLAttributes } from "react";

type ItemType = "salaries" | "tax" | "other";

interface PercentageVisualizationParams extends HTMLAttributes<HTMLElement> {
  items: Array<{
    type: ItemType;
    value: number;
  }>;
}

export type PercentageVisualizationProps = FC<PercentageVisualizationParams>;
