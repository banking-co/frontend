import "./CardChildren.sass";

import { CardChildrenProps } from "./CardChildren.interface";

export const CardChildren: CardChildrenProps = (props) => {
  return <div class="CardChildren">{props.children}</div>;
};
