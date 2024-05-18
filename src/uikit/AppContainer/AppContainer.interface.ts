import type { Component, JSX } from "solid-js";

interface AppParams extends JSX.HTMLAttributes<HTMLDivElement> {}

export type AppContainerProps = Component<AppParams>;
