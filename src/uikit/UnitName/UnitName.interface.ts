import type { Component, JSX } from "solid-js";

interface UnitNameParams {
  userId: number;
  isBold?: boolean;
  tagName?: "h1" | "h2" | "p" | "span";
  after?: JSX.Element;
  visibleUserId?: boolean;
}

export type UnitNameProps = Component<UnitNameParams>;
