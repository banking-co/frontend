import "./CardHeader.sass";

import { createMemo } from "solid-js";
import { useTranslation } from "hooks";

import { IconWrapper, Position, Text } from "uikit";

import { IconChevronRight } from "assets/icons";

import { CardHeaderProps } from "./CardHeader.interface";

export const CardHeader: CardHeaderProps = (props) => {
  const t = useTranslation();

  const propagation = createMemo(() => {
    switch (props.propagation) {
      case "arrow":
        return <IconChevronRight />;
      case "text":
        return (
          <Text text={t("app.card.propagation.text")} tag={"span"} isAccent />
        );
      default:
        return null;
    }
  });

  const showPropagation = createMemo(
    () =>
      propagation() && (
        <div class="CardHeader__propagation">{propagation()}</div>
      ),
  );

  const showCardIcon = createMemo(
    () =>
      props.icon && (
        <IconWrapper height={28} width={28}>
          {props.icon}
        </IconWrapper>
      ),
  );

  return (
    <Position
      class="CardHeader"
      type={props.titleWrap ? "column" : "line"}
      alignItems={props.titleWrap ? undefined : "center"}
      justifyContent="space-between"
      gap={8}
    >
      {props.titleWrap ? (
        <>
          <Position
            type="line"
            alignItems="center"
            justifyContent="space-between"
            style={{ width: "100%" }}
          >
            {showCardIcon()}
            {showPropagation()}
          </Position>
          <Text text={props.title} tag="p" />
        </>
      ) : (
        <>
          <Position type="line" alignItems="center" gap={8}>
            {showCardIcon()}
            <Text text={props.title} tag="p" />
          </Position>
          {showPropagation()}
        </>
      )}
    </Position>
  );
};
