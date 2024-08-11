import "./Spinner.sass";

import classNames from "classnames";

import type { SpinnerProps } from "./Spinner.interface";

export const Spinner: SpinnerProps = ({
  color = "default",
  size = "medium",
}) => {
  return (
    <div
      className={classNames({
        Spinner: true,
        [`Spinner_size--${size}`]: !!size,
        [`Spinner_color--${color}`]: !!color,
      })}
    >
      <svg fill="currentColor" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
    </div>
  );
};
