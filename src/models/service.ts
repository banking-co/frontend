import { DefaultListItemsParams } from "./default";

export interface Gesture {
  startX?: number;
  startY?: number;
  startT?: Date;
  isPressed?: boolean;
  isY?: boolean;
  isX?: boolean;
  isSlideX?: boolean;
  isSlideY?: boolean;
  isSlide?: boolean;
  shiftX?: number;
  shiftY?: number;
  shiftXAbs?: number;
  shiftYAbs?: number;
}

export interface GestureEvent extends Gesture {
  originalEvent: TouchEvent | MouseEvent;
}

export enum Device {
  Desktop = "desktop",
  Mobile = "mobile",
}

export enum Platform {
  Desktop = "desktop",
  iOS = "ios",
  Android = "android",
}

export enum Modals {
  Bonus = "bonus",
  Currency = "currency",
  RenameBank = "rename_bank",
}

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export enum Mode {
  Default = "default",
  Destroy = "destroy",
  Progress = "progress",
  Primary = "primary",
}

export type ListItemsModel = Array<{
  title: string;
  description: string;
  children: Array<
    (
      | { type: "route"; to: string }
      | { type: "switch"; onSwitch: Function }
      | { type: "modal"; modal: Modals }
    ) &
      DefaultListItemsParams
  >;
}>;
