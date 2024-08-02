import "./ModalProvider.sass";

import { ModalProviderProps } from "./ModalProvider.interface";
import { useModal } from "hooks";

export const ModalProvider: ModalProviderProps = (activeModal) => {
  const { closeModal } = useModal();

  return <></>;
};
