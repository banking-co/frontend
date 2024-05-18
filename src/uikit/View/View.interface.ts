import type { Component, JSX } from "solid-js";

interface ViewParams {
  children: JSX.Element;
  activePanel: string;
}

export type ViewProps = Component<ViewParams>;
