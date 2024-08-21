import "./ModalProvider.sass";

import { useEffect } from "react";
import { useModal } from "hooks";

import { ModalProviderProps } from "./ModalProvider.interface";

import { modals } from "./ModalProvider.routing";

export const ModalProvider: ModalProviderProps = () => {
  const { activeModal } = useModal();

  useEffect(() => {
    console.log("ModalProvider - active modal: ", activeModal);
  }, [activeModal]);

  return <>{activeModal ? modals[activeModal].element : null}</>;
};
