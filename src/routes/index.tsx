import {
  App,
  Fallback,
  Profile,
  Settings,
  Menu,
  Management,
  BusinessEmploymentList,
  BusinessEmploymentRecruit,
  UsersProfile,
} from "core";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <Fallback />,
      },
      {
        path: "/",
        element: <Profile />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/profile/:id",
        element: <UsersProfile />,
      },

      {
        path: "/management",
        element: <Management />,
      },
      {
        path: "/management/employment/list",
        element: <BusinessEmploymentList />,
      },
      {
        path: "/management/employment/recruit",
        element: <BusinessEmploymentRecruit />,
      },

      {
        path: "/menu/settings/settings",
        element: <Settings />,
      },
    ],
  },
];

export { routes };
