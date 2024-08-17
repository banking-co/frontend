import { useGetUser } from "hooks";

import { Text } from "uikit";

import type { UnitIdentifierProps } from "./UnitIdentifier.interface";

export const UnitIdentifier: UnitIdentifierProps = (props) => {
  const getUser = useGetUser();
  return <Text text={`@${getUser(props.userId)}`} tag="p" isMuted />;
};
