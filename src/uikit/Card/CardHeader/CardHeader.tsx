import "./CardHeader.sass";

import { useMemo } from "react";
import { useTranslation } from "i18nano";

import { IconWrapper, Position, Text } from "uikit";

import { IconChevronRight } from "@tabler/icons-react";

import { CardHeaderProps } from "./CardHeader.interface";

export const CardHeader: CardHeaderProps = (props) => {
  const t = useTranslation();

  const propagation = useMemo(() => {
    switch (props.propagation) {
      case "arrow":
        return (
          <IconChevronRight
            width={14}
            height={14}
            strokeWidth={4}
            color="var(--accent)"
          />
        );
      case "text":
        return <Text text={t("card.propagation.text")} tag={"span"} isAccent />;
      default:
        return null;
    }
  }, [props.propagation]);

  const showPropagation = useMemo(
    () =>
      propagation && (
        <div className="CardHeader__propagation">{propagation}</div>
      ),
    [propagation],
  );

  const showCardIcon = useMemo(
    () =>
      props.icon && (
        <IconWrapper height={28} width={28}>
          {props.icon}
        </IconWrapper>
      ),
    [props.icon],
  );

  return (
    <Position
      className="CardHeader"
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
            {showCardIcon}
            {showPropagation}
          </Position>
          <Text text={props.title} tag="p" />
        </>
      ) : (
        <>
          <Position type="line" alignItems="center" gap={8}>
            {showCardIcon}
            <Text text={props.title} tag="p" />
          </Position>
          {showPropagation}
        </>
      )}
    </Position>
  );
};
