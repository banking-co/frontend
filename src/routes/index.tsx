import { App, Fallback, Profile, Menu, Management } from "core";
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
    ],
  },
];

export { routes };
