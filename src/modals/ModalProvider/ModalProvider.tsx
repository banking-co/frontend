import "./ModalProvider.sass";

import { useModal } from "hooks";

import { ModalProviderProps } from "./ModalProvider.interface";

import { modals } from "./ModalProvider.routing";
import { useEffect } from "react";

export const ModalProvider: ModalProviderProps = () => {
  const { activeModal } = useModal();

  useEffect(() => {
    console.log(activeModal);
  }, [activeModal]);

  return <>{activeModal && modals[activeModal].element}</>;
};
