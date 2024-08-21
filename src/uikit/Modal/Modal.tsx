import "./Modal.sass";

import classNames from "classnames";
import { useModal } from "hooks";

import { Events, Text } from "uikit";

import type { ModalChildrenProps, ModalProps } from "./Modal.interface";

import { IconSquareRoundedX } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";

const ModalChildren: ModalChildrenProps = (props) => {
  const { closeModal } = useModal();
  const animateDelay = 300;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => {
      setIsVisible(false);
    };
  }, []);

  const handleOnClose = useCallback((e: any) => {
    setIsVisible(false);

    setTimeout(() => {
      closeModal();
    }, animateDelay);
  }, []);

  return (
    <div
      className={classNames("Modal__overlay", {
        "Modal__overlay--visible": isVisible,
      })}
      onClick={handleOnClose}
    >
      <div
        className={classNames("Modal__wrapper", {
          "Modal__wrapper--page": props.isPage,
          "Modal__wrapper--card": !props.isPage,
          "Modal__wrapper--animate-in": isVisible,
          "Modal__wrapper--animate-out": !isVisible,
        })}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="Modal__header">
          <Text text={props.header || ""} tag="p" />
          <Events
            className="Modal__header-close"
            type={"div"}
            onClick={handleOnClose}
          >
            <IconSquareRoundedX size={18} color={"var(--gray)"} />
          </Events>
        </div>
        <div className="Modal__container">{props.children}</div>
      </div>
    </div>
  );
};

const Card: ModalProps = (props) => {
  return <ModalChildren {...props} />;
};

const Page: ModalProps = (props) => {
  return <ModalChildren {...props} isPage />;
};

export const Modal = {
  Card,
  Page,
};
