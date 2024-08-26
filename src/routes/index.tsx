import {
  App,
  Fallback,
  Profile,
  Settings,
  Menu,
  Management,
  BusinessEmploymentList,
  BusinessEmploymentRecruit,
} from "core";

import { RouteObject } from "react-router-dom";
import { RouteId } from "models";

export const pages: RouteObject[] = [
  {
    id: RouteId.App,
    path: "/",
    element: <App />,
    children: [
      {
        id: RouteId.Fallback,
        path: "*",
        element: <Fallback />,
      },
      {
        id: RouteId.Profile,
        path: "/",
        element: <Profile />,
      },
      {
        id: RouteId.Menu,
        path: "/menu",
        element: <Menu />,
      },

      {
        id: RouteId.Management,
        path: "/management",
        element: <Management />,
      },
      {
        id: RouteId.ManagementEmployeeList,
        path: "/management/employment/list",
        element: <BusinessEmploymentList />,
      },
      {
        id: RouteId.ManagementEmployeeSearch,
        path: "/management/employment/search",
        element: <BusinessEmploymentRecruit />,
      },

      {
        id: RouteId.Settings,
        path: "/menu/settings",
        element: <Settings />,
      },
    ],
  },
];

const removeIdFromRoutes = (routes: RouteObject[]): RouteObject[] => {
  return routes.map(({ id, children, ...rest }): RouteObject => {
    const updatedChildren = children ? removeIdFromRoutes(children) : undefined;

    return {
      ...rest,
      children: updatedChildren,
    } as RouteObject;
  });
};

const routes = removeIdFromRoutes(pages);

export { routes };
