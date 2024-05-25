import "./Tag.sass";

import { Text } from "uikit";

import { TagProps } from "./Tag.interface";
import { TextCurrencyType } from "../../store/models";

export const Tag: TagProps = (props) => {
  return (
    <div
      class="Tag"
      classList={{
        [`Tag_mode--${props.mode}`]: true,
        [`Tag_center`]: !!props?.isCenter,
      }}
    >
      {props.icon && <div class="Tag__icons">{props.icon}</div>}
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
