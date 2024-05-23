import "./Card.sass";

import { CardHeader } from "./CardHeader/CardHeader";

import type { CardProps } from "./Card.interface";
import { CardChildren } from "./CardChildren/CardChildren";
import { Text } from "../Text/Text";
import { useTranslation } from "hooks";

export const Card: CardProps = (props) => {
  const t = useTranslation();

  return (
    <div
      class="Card"
      classList={{
        [`Card--shaped`]: !!props.isSquare,
        [`Card--disabled`]: !!props.disable,
        ...props.classList,
      }}
      style={props.style}
    >
      <div class="Card__container">
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
                <Text text={t("app.card.disabled")} tag={"span"} isMuted />
              ) : (
                props.children
              )
            }
          />
        )}
      </div>
      {props.extra && <div class="Card__extra">{props.extra}</div>}
    </div>
  );
};
