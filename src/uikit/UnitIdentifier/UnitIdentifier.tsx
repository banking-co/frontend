import { useUser } from "hooks";

import { Text } from "uikit";

import type { UnitIdentifierProps } from "./UnitIdentifier.interface";

export const UnitIdentifier: UnitIdentifierProps = (props) => {
  const user = useUser(props.userId);
  return <Text text={`@${user.id}`} tag="p" isMuted />;
};
