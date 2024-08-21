import type { FC, HTMLAttributes, ReactNode } from "react";
import { Modals } from "models";

interface ModalsParams {
  element: ReactNode;
  meta?: object;
}

export type ModalsInterface = {
  [key in Modals]: ModalsParams;
};

interface ModalProviderParams extends HTMLAttributes<HTMLElement> {}

export type ModalProviderProps = FC<ModalProviderParams>;
