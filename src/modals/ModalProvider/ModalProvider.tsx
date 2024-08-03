import "./ModalProvider.sass";

import { useSelector } from "react-redux";

import { appSelector } from "store/app";

import { ModalProviderProps } from "./ModalProvider.interface";

export const ModalProvider: ModalProviderProps = () => {
  const { activeModal } = useSelector(appSelector);
  return <></>;
};
