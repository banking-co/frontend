import "./Switch.sass";

import classNames from "classnames";

export const Switch = () => {
  return (
    <label className="Switch">
      <input type="checkbox" />
      <span className={classNames("Switch__slider", "Switch__round")}></span>
    </label>
  );
};
