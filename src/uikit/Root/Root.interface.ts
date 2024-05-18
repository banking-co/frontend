import type { Component, JSX } from "solid-js";

interface RootParams extends JSX.HTMLAttributes<HTMLElement> {
  activeView: string;
  activeModal: string;
  bottomNavbar: JSX.Element;
}

export type RootProps = Component<RootParams>;
