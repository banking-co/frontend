import { useCallback } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";

import { getRouteWithId } from "utils";

import { RouteId } from "models";

export const useRouter = () => {
  const navigate = useNavigate();

  const goTo = useCallback((id: RouteId, options?: NavigateOptions) => {
    const route = getRouteWithId(id);
    if (route && route.path) {
      navigate(route.path, options);
    } else {
      console.error(`useRouter - goTo: ${id} is undefined`);
    }
  }, []);

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  const goBackWithReplace = useCallback(() => {
    navigate(-1);
    // navigate(0, { replace: true });
  }, []);

  return { goTo, goBack, goBackWithReplace };
};
