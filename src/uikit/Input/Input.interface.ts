import { FC, HTMLAttributes, ReactNode } from "react";

interface InputParams extends HTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  stretched?: boolean;
  size?: "small" | "regular" | "large";
  type?: "primary" | "secondary" | "outline";
  text?: string;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
}

export type InputProps = FC<InputParams>;
