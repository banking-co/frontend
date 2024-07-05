import type { FC, HTMLAttributes } from "react";

export type BottomNavbarItemsModel = Array<{ key: string; icon: ReactNode }>;

interface BottomNavbarParams {}

export type BottomNavbarProps = FC<BottomNavbarParams>;
