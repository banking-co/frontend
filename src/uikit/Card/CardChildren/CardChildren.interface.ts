import type { Component, JSX } from "solid-js";

interface CardChildrenParams extends JSX.HTMLAttributes<HTMLElement> {}

export type CardChildrenProps = Component<CardChildrenParams>;
