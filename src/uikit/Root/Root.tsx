import "./Root.sass";

// import { type ReactElement, Children, useMemo } from "solid-js";

import { ModalProvider } from "modals";

import { RootProps } from "./Root.interface";

export const Root: RootProps = (props) => {
  // const views = useMemo(
  //   () => Children.toArray(props.children) as ReactElement[],
  //   [props.children],
  // );
  //
  // const view = useMemo(
  //   () => views.filter((item) => item.props["data-view"] === props.activeView),
  //   [props.activeView, views],
  // );

  return (
    <div class="Root">
      {/*<div class="Root__container">{view}</div>*/}
      {/*<div class="Root__navigation">{props.bottomNavbar}</div>*/}
    </div>
  );
};
