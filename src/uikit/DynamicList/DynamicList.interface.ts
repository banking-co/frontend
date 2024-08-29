import type { FC, HTMLAttributes } from "react";

interface DynamicListParams<T> extends HTMLAttributes<HTMLElement> {
  itemClassName?: string;
  items: T[];
  onLoadData?: () => Promise<T[]>;
  threshold?: number;
  gap?: number;
}

export type DynamicListProps<T> = FC<DynamicListParams<T>>;
