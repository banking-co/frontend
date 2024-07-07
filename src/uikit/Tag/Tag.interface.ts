import type { FC, HTMLAttributes, ReactNode } from "react";
import { Mode } from "store/models";

export interface TagParams extends HTMLAttributes<HTMLElement> {
  mode?: Mode;
  icon?: ReactNode;
  value: string;

  isCurrency?: boolean;
  isCenter?: boolean;
}

export type TagProps = FC<TagParams>;
