import type { Component, JSX } from "solid-js";

type ItemType = "salaries" | "tax" | "other";

interface PercentageVisualizationParams
  extends JSX.HTMLAttributes<HTMLElement> {
  items: Array<{
    type: ItemType;
    value: number;
  }>;
}

export type PercentageVisualizationProps =
  Component<PercentageVisualizationParams>;
