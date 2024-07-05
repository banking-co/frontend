import "./UnitName.sass";

import { useUser } from "hooks";

import type { UnitNameProps } from "./UnitName.interface";

export const UnitName: UnitNameProps = (props) => {
  const user = useUser(props.userId);

  return (
    <span className="UnitName">
      {/*<Text*/}
      {/*  text={user.fullName}*/}
      {/*  tag={props.tagName || "h2"}*/}
      {/*  isBold={props.isBold}*/}
      {/*/>*/}
      {/*{props.visibleUserId && (*/}
      {/*  <Text*/}
      {/*   className="UnitName__uid"*/}
      {/*    text={"@" + user.id.toString()}*/}
      {/*    tag={props.tagName || "h2"}*/}
      {/*    isBold={props.isBold}*/}
      {/*    isMuted*/}
      {/*  />*/}
      {/*)}*/}
      {/*{props.after}*/}
    </span>
  );
};
