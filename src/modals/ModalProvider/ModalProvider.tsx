import "./ModalProvider.sass";

import { useModal } from "hooks";

import { ModalProviderProps } from "./ModalProvider.interface";

import { modals } from "./ModalProvider.routing";

export const ModalProvider: ModalProviderProps = () => {
  const { activeModal } = useModal();
  return <>{activeModal ? modals[activeModal].element : null}</>;
};
