import type { Component, JSX } from "solid-js";

export type BottomNavbarItemsModel = Array<{ key: string; icon: JSX.Element }>;

interface BottomNavbarParams {
  items: BottomNavbarItemsModel;
}

export type BottomNavbarProps = Component<BottomNavbarParams>;
