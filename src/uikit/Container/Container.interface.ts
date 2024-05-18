import type { Component, JSX } from "solid-js";

interface ContainerParams extends JSX.HTMLAttributes<HTMLDivElement> {
  isDefault?: boolean;
}

export type ContainerProps = Component<ContainerParams>;
