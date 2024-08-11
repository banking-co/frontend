import { FC, HTMLAttributes, ReactNode } from "react";

interface ButtonParams extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  stretched?: boolean;
  size?: "small" | "regular" | "large";
  type?: "primary" | "secondary" | "outline";
  text?: string;
  disabled?: boolean;
}

export type ButtonProps = FC<ButtonParams>;
