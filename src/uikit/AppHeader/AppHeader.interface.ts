import type { FC, ReactNode } from "react";

interface AppHeaderParams {
  withBack?: boolean;
  before?: ReactNode;
}

export type AppHeaderProps = FC<AppHeaderParams>;
