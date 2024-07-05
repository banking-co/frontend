/* @refresh reload */
import "./styles/main.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { dataset } from "utils";
import bridge from "@vkontakte/vk-bridge";

import { TranslationProvider } from "i18nano";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ru } from "translations";
import { routes } from "routes";

const translations = {
  ru: async () => ru,
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <TranslationProvider translations={translations} language="ru">
      <RouterProvider router={createBrowserRouter(routes)} />
    </TranslationProvider>
  </React.StrictMode>,
);

bridge.send("VKWebAppInit");

bridge.subscribe((e) => {
  const { type, data } = e.detail;
  const bodyData = dataset(document.body);

  switch (type) {
    case "VKWebAppUpdateConfig":
      const theme =
        data.scheme === "space_gray" || data.scheme === "vkcom_dark"
          ? "dark"
          : "light";

      return bodyData.set({ theme });
  }
});
