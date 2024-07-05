import "./Tag.sass";

import classNames from "classnames";

import { Text } from "uikit";

import { TagProps } from "./Tag.interface";
import { TextCurrencyType } from "store/models";

export const Tag: TagProps = (props) => {
  return (
    <div
      className={classNames({
        Tag: true,
        [`Tag_mode--${props.mode}`]: true,
        [`Tag_center`]: !!props?.isCenter,
      })}
    >
      {props.icon && <div className="Tag__icons">{props.icon}</div>}
      <Text
        isCurrency={props.isCurrency}
        currencyType={TextCurrencyType.Dollar}
        text={props.value}
        tag={"span"}
        mode={props.mode}
      />
    </div>
  );
};
