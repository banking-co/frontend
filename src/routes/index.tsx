import { App, Fallback, Profile, Settings, Menu, Management } from "core";
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
        path: "/management",
        element: <Management />,
      },
      {
        path: "/menu/settings/settings",
        element: <Settings />,
      },
    ],
  },
];

export { routes };
