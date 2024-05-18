import "./View.sass";

// import {
//   type ReactElement,
//   Children,
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

import type { ViewProps } from "./View.interface";

export const View: ViewProps = ({ activePanel, children }) => {
  // const childs = useMemo(
  //   () => Children.toArray(children) as ReactElement[],
  //   [children],
  // );
  //
  // const [store, setStore] = useState<any>({
  //   back: undefined,
  //   active: activePanel,
  //   anim: false,
  //   show: false,
  // });
  //
  // useEffect(() => {
  //   if (store.active !== activePanel) {
  //     setStore({
  //       back: store.active,
  //       active: activePanel,
  //       anim: true,
  //       show: true,
  //     });
  //   }
  // }, [activePanel]);

  // const isActive = (element: string) => element === store.active;
  // const isBack = (element: string) => element === store.back && store.show;

  // const direction = (): "next" | "back" => {
  //   let back = -1;
  //   let next = -1;
  //
  //   for (let i = 0; i < childs.length; i++) {
  //     if (childs[i].props["data-panel"] === store.back) {
  //       back = i;
  //     }
  //     if (childs[i].props["data-panel"] === store.active) {
  //       next = i;
  //     }
  //     if (back !== -1 && next !== -1) {
  //       break;
  //     }
  //   }
  //
  //   return back < next ? "next" : "back";
  // };

  return (
    <div class="View">
      {/*{childs.map((element) => {*/}
      {/*  if (*/}
      {/*    isActive(element.props["data-panel"]) ||*/}
      {/*    isBack(element.props["data-panel"])*/}
      {/*  ) {*/}
      {/*    return (*/}
      {/*      <div*/}
      {/*        key={`view-${element.props["data-panel"]}`}*/}
      {/*        onAnimationEnd={() =>*/}
      {/*          isActive(element.props["data-panel"]) &&*/}
      {/*          setStore({*/}
      {/*            anim: false,*/}
      {/*            show: false,*/}
      {/*            back: store.back,*/}
      {/*            active: store.active,*/}
      {/*          })*/}
      {/*        }*/}
      {/*        class={classs({*/}
      {/*          [`View--to-${direction()}`]: true,*/}
      {/*          ["View--back"]: isBack(element.props["data-panel"]),*/}
      {/*          ["View--active"]: isActive(element.props["data-panel"]),*/}
      {/*          ["View--animate"]: store.anim,*/}
      {/*        })}*/}
      {/*      >*/}
      {/*        {element}*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  }*/}
      {/*})}*/}
    </div>
  );
};
