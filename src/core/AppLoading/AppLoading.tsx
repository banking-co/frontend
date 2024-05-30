import "./AppLoading.sass";

import { createSignal, onMount, Show } from "solid-js";

import { Placeholder, Spinner } from "uikit";

import { AppLoadingProps } from "./AppLoading.interface";

export const AppLoading: AppLoadingProps = (props) => {
  const [isLoading, setLoading] = createSignal(true);
  const [isClose, setClose] = createSignal(false);

  onMount(() => {
    setTimeout(() => {
      setClose(true);

      setTimeout(() => {
        setLoading(false);
      }, 700);
    }, 3000);
  });

  return (
    <Show
      when={!isLoading()}
      fallback={
        <Placeholder
          isFullScreen
          classList={{
            [`AppLoading_animation-fade_out`]: isClose(),
          }}
        >
          <Spinner />
        </Placeholder>
      }
    >
      {props.children}
    </Show>
  );
};
