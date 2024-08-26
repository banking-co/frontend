import { RouteObject } from "react-router-dom";
import { RouteId } from "models";
import { pages } from "../routes";

export const getRouteWithId = (id: RouteId): RouteObject | undefined => {
  const findRoute = (routes: RouteObject[]): RouteObject | undefined => {
    for (const route of routes) {
      if ((route as any).id === id) {
        return route;
      }

      if (route.children) {
        const found = findRoute(route.children);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  };

  return findRoute(pages);
};
