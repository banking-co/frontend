/* @refresh reload */
import { render } from "solid-js/web";
import { Route, HashRouter } from "@solidjs/router";

import bridge from "@vkontakte/vk-bridge";

import { App, Fallback, Profile } from "core";

import "./styles/main.scss";

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
      </Route>
      <Route path="*404" component={Fallback} />
    </HashRouter>
  ),
  root!,
);

bridge.send("VKWebAppInit");

bridge.subscribe((e) => {
  setTimeout(() => {
    console.log(e);
  }, 3000);
});
