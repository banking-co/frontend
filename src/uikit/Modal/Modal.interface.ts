import type { FC, HTMLAttributes } from "react";

interface ModalDefaultParams {
  onClick?: () => void;
}

interface ModalChildrenParams
  extends Omit<HTMLAttributes<HTMLElement>, "onClick">,
    ModalDefaultParams {
  mode?: "card" | "page";
}

interface ModalParams
  extends Omit<HTMLAttributes<HTMLElement>, "onClick">,
    ModalDefaultParams {}

export type ModalChildrenProps = FC<ModalChildrenParams>;
export type ModalProps = FC<ModalParams>;
