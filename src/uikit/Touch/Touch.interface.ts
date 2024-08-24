import type { FC, HTMLAttributes } from "react";
import type { GestureEvent } from "models";

export interface TouchParams extends HTMLAttributes<HTMLDivElement> {
  onStart?(event: GestureEvent | TouchEvent | MouseEvent): void;
  onStartX?(event: GestureEvent | TouchEvent | MouseEvent): void;
  onStartY?(event: GestureEvent): void;
  onMove?(event: GestureEvent): void;
  onMoveX?(event: GestureEvent): void;
  onMoveY?(event: GestureEvent): void;
  onEnd?(event: GestureEvent): void;
  onEndX?(event: GestureEvent): void;
  onEndY?(event: GestureEvent): void;
  useCapture?: boolean;
}

export type TouchProps = FC<TouchParams>;
export type TouchSupportEvents = [
  "touchstart" | "mousedown",
  "touchmove" | "mousemove",
  "touchend" | "mouseup",
  "touchcancel" | "mouseleave",
];
