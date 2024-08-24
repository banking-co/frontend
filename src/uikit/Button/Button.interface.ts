import { FC, HTMLAttributes, ReactNode } from "react";
import { Mode } from "models";

interface ButtonParams extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  stretched?: boolean;
  size?: "small" | "regular" | "large";
  type?: "primary" | "secondary" | "outline";
  text?: string;
  disabled?: boolean;
  mode?: Mode;
  isTextBold?: boolean;
}

export type ButtonProps = FC<ButtonParams>;
