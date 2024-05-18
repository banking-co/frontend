import type { JSX, Component } from "solid-js";
import { Mode } from "store/models";

export interface TagParams extends JSX.HTMLAttributes<HTMLElement> {
  mode?: Mode;
  icon?: JSX.Element;
  value: string;

  isCenter?: boolean;
}

export type TagProps = Component<TagParams>;
