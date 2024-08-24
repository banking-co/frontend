import { useRef } from "react";

import type { Gesture } from "models";
import type { TouchProps, TouchSupportEvents } from "./Touch.interface";

export const isTouchSupport = window && "ontouchstart" in window;

export const supportEvents = (): TouchSupportEvents =>
  isTouchSupport
    ? ["touchstart", "touchmove", "touchend", "touchcancel"]
    : ["mousedown", "mousemove", "mouseup", "mouseleave"];

const cordX = (e: any): number =>
  e?.clientX || e?.changedTouches?.[0]?.clientX || 0;
const cordY = (e: any): number =>
  e?.clientY || e?.changedTouches?.[0]?.clientY || 0;

export const Touch: TouchProps = ({
  onStart,
  onStartX,
  onStartY,
  onMove,
  onMoveX,
  onMoveY,
  onEnd,
  onEndX,
  onEndY,
  onClick,
  useCapture,
  children,
  ...restProps
}) => {
  const cancelClick = useRef<boolean>(false);
  const gesture = useRef<Gesture>({});

  function Start(event: any) {
    const motion = gesture.current;
    gesture.current = {
      ...motion,
      startX: cordX(event),
      startY: cordY(event),
      startT: new Date(),
      isPressed: true,
    };
    const outEvent = {
      ...gesture.current,
      originalEvent: event,
    };
    onStart && onStart(outEvent);
    onStartX && onStartX(outEvent);
    onStartY && onStartY(outEvent);
  }

  function Move(event: any) {
    const motion = gesture.current;
    const { isPressed, isX, isY, startX, startY } = motion;
    if (isPressed) {
      const shiftX = cordX(event) - (startX || 0);
      const shiftY = cordY(event) - (startY || 0);
      const shiftXAbs = Math.abs(shiftX);
      const shiftYAbs = Math.abs(shiftY);

      if (!isX && !isY) {
        let willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
        let willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
        let willBeSlidedX = willBeX && (!!onMoveX || !!onMove);
        let willBeSlidedY = willBeY && (!!onMoveY || !!onMove);

        gesture.current.isX = willBeX;
        gesture.current.isY = willBeY;
        gesture.current.isSlideX = willBeSlidedX;
        gesture.current.isSlideY = willBeSlidedY;
        gesture.current.isSlide = willBeSlidedX || willBeSlidedY;
      }

      if (gesture.current.isSlide) {
        gesture.current.shiftX = shiftX;
        gesture.current.shiftY = shiftY;
        gesture.current.shiftXAbs = shiftXAbs;
        gesture.current.shiftYAbs = shiftYAbs;

        const outEvent = {
          ...gesture.current,
          originalEvent: event,
        };
        onMove && onMove(outEvent);
        gesture.current.isSlideX && onMoveX && onMoveX(outEvent);
        gesture.current.isSlideY && onMoveY && onMoveY(outEvent);
      }
    }
  }

  function End(event: any) {
    const motion = gesture.current;
    const { isPressed, isSlide, isSlideX, isSlideY } = motion;
    if (isPressed) {
      const outEvent = {
        ...gesture.current,
        originalEvent: event,
      };
      onEnd && onEnd(outEvent);
      isSlideY && onEndY && onEndY(outEvent);
      isSlideX && onEndX && onEndX(outEvent);
    }
    const target = event.target as HTMLElement;
    cancelClick.current = target.tagName === "A" && (isSlide || false);
    gesture.current = {};
  }

  function onclick(event: any) {
    if (cancelClick.current) {
      cancelClick.current = false;
      event.preventDefault();
    }
    onClick && onClick(event);
  }

  const propsEvent = isTouchSupport
    ? {
        onClick: onclick,
        onTouchStart: Start,
        onTouchMove: Move,
        onTouchEnd: End,
        onTouchCancel: End,
      }
    : {
        onClick: onclick,
        onMouseDown: Start,
        onMouseMove: Move,
        onMouseUp: End,
        onMouseLeave: End,
      };

  return (
    <div {...restProps} {...propsEvent}>
      {children}
    </div>
  );
};
