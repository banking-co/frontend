import { useCallback } from "react";
import {
  NavigateOptions,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { Modals } from "models";

export const useModal = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const key = "modal";

  const activeModal = searchParams.get(key) as Modals | undefined;

  const openModal = useCallback(
    (id: Modals, params?: NavigateOptions) => {
      if (!activeModal || activeModal !== id) {
        setSearchParams({ [key]: id }, params);
      }
    },
    [activeModal],
  );

  const closeModal = useCallback(() => {
    setSearchParams(
      (prev) => {
        prev.delete(key);
        return prev;
      },
      { replace: true },
    );
  }, [activeModal]);

  return {
    activeModal,
    openModal,
    closeModal,
  };
};
