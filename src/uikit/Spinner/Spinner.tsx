import "./Spinner.sass";

import { splitProps, mergeProps } from "solid-js";

import type { SpinnerProps } from "./Spinner.interface";

export const Spinner: SpinnerProps = (props) => {
  const merged = mergeProps(
    {
      color: "default",
      size: "medium",
    },
    props,
  );

  const [local] = splitProps(merged, ["size", "color"]);

  return (
    <div
      class="Spinner"
      classList={{
        [`Spinner__size--${local.size}`]: !!local.size,
        [`Spinner__color--${local.color}`]: !!local.color,
      }}
    >
      <svg fill="currentColor" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    </div>
  );
};
