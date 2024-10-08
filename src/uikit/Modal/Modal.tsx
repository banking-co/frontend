import "./Modal.sass";

import { useEffect, useRef, useState } from "react";
import { useModal } from "hooks";
import { clamp } from "utils";
import classNames from "classnames";

import { Touch } from "uikit";

import { GestureEvent } from "models";
import type { ModalChildrenProps, ModalProps } from "./Modal.interface";

const ModalChildren: ModalChildrenProps = ({ children, mode = "card" }) => {
  const { closeModal } = useModal();
  const safe = useRef({
    top: Number(document.body.style.getPropertyValue("--safe-area-inset-top")),
    bottom: Number(
      document.body.style.getPropertyValue("--safe-area-inset-bottom"),
    ),
  }).current;

  const container = useRef<HTMLDivElement>(null);
  const [store, setStore] = useState({
    anim: false,
    among: window.innerHeight,
  });

  const handlerClose = (
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    console.log("handler-close", store);
    setStore({
      anim: true,
      among: window.innerHeight,
    });

    setTimeout(() => {
      closeModal();
    }, 200);
  };

  const handleStart = (event: GestureEvent) =>
    setStore({
      anim: false,
      among: store.among,
    });

  const handleMove = (event: GestureEvent) => {
    const target = event.originalEvent.currentTarget as HTMLDivElement;
    if (!target || !target.parentElement) {
      return;
    }

    const element = container.current;
    if (!element) {
      return;
    }

    const value = event.shiftY || 0 + 2;
    const clampTop = element.clientHeight - target.parentElement.clientHeight;

    if (value > 0) {
      setStore({
        anim: store.anim,
        among: clamp(
          value,
          0,
          target.parentElement.clientHeight - (safe.bottom + 44),
        ),
      });
    }

    if (value < 0) {
      setStore({
        anim: store.anim,
        among: clamp(value / 4, -clampTop + (safe.bottom + 44), 0),
      });
    }
  };

  const handleEnd = (event: GestureEvent) => {
    if (store.among > 50) {
      return handlerClose();
    }

    setStore({
      anim: true,
      among: 0,
    });
  };

  const resetTouches = (
    event:
      | React.TouchEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  useEffect(() => {
    setTimeout(() => {
      setStore({
        anim: true,
        among: 0,
      });
    }, 50);
  }, []);

  return (
    <div
      className={classNames("ModalChildren", {
        "ModalChildren--animation": store.anim,
        [`ModalChildren--${mode}`]: true,
      })}
      onClick={handlerClose}
    >
      <div ref={container} className={"ModalChildren__inner"}>
        <div
          className={"ModalChildren__content"}
          style={{
            transform: `translateY(${store.among}px)`,
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Touch
            className={"ModalChildren__header"}
            onStartY={handleStart}
            onMoveY={handleMove}
            onEndY={handleEnd}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div />
          </Touch>

          <div className={"ModalChildren__children"} onClick={resetTouches}>
            <div className={"ModalChildren__scroll"}>{children}</div>
          </div>
        </div>

        <div className={"ModalChildren__background"}>
          <div
            className={"ModalChildren__after"}
            style={{ transform: `translateY(${store.among - 2}px)` }}
          />
        </div>
      </div>
    </div>
  );
};

const Card: ModalProps = (props) => {
  return <ModalChildren {...props} />;
};

const Page: ModalProps = (props) => {
  return <ModalChildren {...props} mode="page" />;
};

export const Modal = {
  Card,
  Page,
};
