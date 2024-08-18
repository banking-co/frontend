import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { appActions, appSelector } from "store/app";
import { Modals } from "models";

const useModal = () => {
  const dispatch = useDispatch();
  const { activeModal } = useSelector(appSelector);

  const showModal = useCallback(
    (modalType: Modals, modalProps = {}) => {
      dispatch(appActions.openModal(modalType, modalProps));
    },
    [dispatch],
  );

  const hideModal = useCallback(() => {
    dispatch(appActions.closeModal());
  }, [dispatch]);

  return {
    activeModal,
    showModal,
    hideModal,
  };
};

export default useModal;
