import "./Card.sass";

import classNames from "classnames";
import { useTranslation } from "i18nano";

import { Events, Text } from "uikit";
import { CardChildren } from "./CardChildren/CardChildren";
import { CardHeader } from "./CardHeader/CardHeader";

import type { CardProps } from "./Card.interface";

export const Card: CardProps = (props) => {
  const t = useTranslation();

  return (
    <Events
      disabled={props.disable}
      type={"div"}
      className={classNames({
        Card: true,
        "Card--shaped": !!props.isSquare,
        "Card--clickable": !!props.onClick,
        [`${props.className}`]: !!props.className,
      })}
      onClick={props.onClick}
      style={props.style}
    >
      <div className="Card__container">
        <CardHeader
          titleWrap={props.titleWrap}
          title={props.title}
          propagation={props.disable ? undefined : props.propagation}
          icon={props.icon}
        />
        {(props.children || props.disable) && (
          <CardChildren
            children={
              props.disable ? (
                <Text text={t("card.disabled")} tag={"span"} isMuted />
              ) : (
                props.children
              )
            }
          />
        )}
      </div>
      {props.extra && <div className="Card__extra">{props.extra}</div>}
    </Events>
  );
};
