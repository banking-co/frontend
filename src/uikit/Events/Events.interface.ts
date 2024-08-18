import type { FC, HTMLAttributes, JSXElementConstructor } from "react";
import type { JSX } from "react/jsx-runtime";

type TagType = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export interface EventsParams extends HTMLAttributes<HTMLElement> {
  type: TagType;
  disabled?: boolean;
  clickable?: boolean;
}
export type EventsProps = FC<EventsParams>;
