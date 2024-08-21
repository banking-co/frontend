import { useMemo } from "react";
import { useGetUser } from "hooks";

import { Text } from "uikit";

import type { UnitIdentifierProps } from "./UnitIdentifier.interface";

export const UnitIdentifier: UnitIdentifierProps = (props) => {
  const getUser = useGetUser();

  const user = useMemo(
    () => props.user || getUser(props.userId) || undefined,
    [],
  );

  if (!user) return null;
  return <Text text={`@uid${user.id}`} tag={props.tagName || "p"} isMuted />;
};
