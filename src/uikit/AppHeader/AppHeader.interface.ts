import type { Component, JSX } from "solid-js";

interface AppHeaderParams {
  withBack?: boolean;
  before?: JSX.Element;
}

export type AppHeaderProps = Component<AppHeaderParams>;
