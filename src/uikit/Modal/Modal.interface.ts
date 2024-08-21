import type { FC, HTMLAttributes, ReactNode } from "react";

interface ModalDefaultParams {
  header?: string;
  bottom?: ReactNode;

  headerIcon?: ReactNode;
}

interface ModalChildrenParams
  extends HTMLAttributes<HTMLElement>,
    ModalDefaultParams {
  children?: ReactNode;
  isPage?: boolean;
}

interface ModalParams extends HTMLAttributes<HTMLElement>, ModalDefaultParams {}

export type ModalChildrenProps = FC<ModalChildrenParams>;
export type ModalProps = FC<ModalParams>;
