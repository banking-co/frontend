/* @refresh reload */
import { render } from "solid-js/web";
import { Route, HashRouter } from "@solidjs/router";

import bridge from "@vkontakte/vk-bridge";

import { App, Fallback, Profile, Menu } from "core";

import "./styles/main.scss";
import { dataset } from "utils";

const root = document.getElementById("root");
const baseRoutePath = "/";

// @ts-ignore
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <HashRouter base={baseRoutePath} root={App}>
      <Route path="/">
        <Route path="/" component={Profile} />
        <Route path="/menu" component={Menu} />
      </Route>
      <Route path="*404" component={Fallback} />
    </HashRouter>
  ),
  root!,
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
