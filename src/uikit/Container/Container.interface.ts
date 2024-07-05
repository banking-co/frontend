import type { FC, HTMLAttributes } from "react";

interface ContainerParams extends HTMLAttributes<HTMLDivElement> {
  isDefault?: boolean;
}

export type ContainerProps = FC<ContainerParams>;
