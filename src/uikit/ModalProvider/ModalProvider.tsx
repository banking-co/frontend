import "./ModalProvider.sass";

import { createEffect, createSignal, onCleanup, Show } from "solid-js";

export const ModalProvider = () => {
  let modalRef!: HTMLDivElement;

  const [position, setPosition] = createSignal({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = createSignal(false);
  const [dragStart, setDragStart] = createSignal({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position().x, y: e.clientY - position().y });
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({
      x: touch.clientX - position().x,
      y: touch.clientY - position().y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging()) return;
    setPosition({ x: e.clientX - dragStart().x, y: e.clientY - dragStart().y });
  };

  const handleTouchMove = (e) => {
    if (!isDragging()) return;
    const touch = e.touches[0];
    // console.log(
    //   touch.clientY - dragStart().y + modalRef.clientHeight >=
    //     window.innerHeight,
    //   touch.clientY - dragStart().y,
    //   window.innerHeight,
    //   modalRef.clientHeight,
    // );
    setPosition({
      x: touch.clientX - dragStart().x,
      y: touch.clientY - dragStart().y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const closeModal = (e) => {
    if (e.target === modalRef) {
      console.log("close");
    }
  };

  createEffect(() => {
    console.log();
  });

  onCleanup(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  });

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
  document.addEventListener("touchmove", handleTouchMove);
  document.addEventListener("touchend", handleTouchEnd);
  return (
    <Show when={true}>
      <div
        ref={modalRef}
        class={"ModalProvider"}
        style={{
          transform: `translate(0, ${
            position().y <= 0
              ? Math.abs(position().y - modalRef.clientHeight) - 1 >=
                window.innerHeight
                ? 0
                : position().y
              : 0
          }px)`,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        123
      </div>
    </Show>
  );
};
