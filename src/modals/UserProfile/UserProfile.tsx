import { FC, useEffect, useMemo } from "react";
import { useTranslation } from "i18nano";

import {
  Avatar,
  Modal,
  Placeholder,
  Position,
  Spinner,
  Tag,
  UnitName,
} from "uikit";
import { useGetUser } from "hooks";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Mode } from "models";
import { usersActions, usersSelector } from "../../store/users";
import {
  IconCurrencyDollar,
  IconId,
  IconTrendingUp,
} from "@tabler/icons-react";
import { formatCurrency } from "utils";

export const UserProfile: FC = () => {
  const t = useTranslation();
  const d = useDispatch();
  const location = useLocation();
  const getUser = useGetUser();
  const { isLoadingUser } = useSelector(usersSelector);

  const uid = location.state?.uid ? Number(location.state.uid) : undefined;
  // const uid = 2;

  const user = useMemo(() => {
    if (uid) {
      return getUser(uid) || undefined;
    } else {
      return;
    }
  }, [location, uid]);

  useEffect(() => {
    if (uid) {
      d(
        usersActions.loadUser({
          uid,
        }),
      );
    }
  }, [uid]);

  function renderPlaceholders() {
    if (!uid) {
      return <>Error uid</>;
    }

    if (!user && isLoadingUser) {
      return (
        <Placeholder isCenter>
          <Spinner />
        </Placeholder>
      );
    }

    if (!user) {
      return <>Error user</>;
    }

    return null;
  }

  function renderContent() {
    return (
      <Position type={"column"} stretched gap={28}>
        <Position type={"column"} stretched alignItems="center" gap={12}>
          <Position type={"column"} gap={12} stretched alignItems="center">
            <Avatar
              size={"large"}
              src={
                user?.personalInfo?.photo100 ||
                user?.personalInfo?.photo200 ||
                ""
              }
              isSquare
            />
            <UnitName user={user} tagName={"h2"} />
          </Position>

          <Position type={"line"} gap={12}>
            <Tag
              icon={<IconCurrencyDollar />}
              value={formatCurrency(134 * 100)}
              mode={Mode.Default}
            />
            <Tag icon={<IconTrendingUp />} value={"12"} mode={Mode.Default} />
          </Position>
          <Tag
            icon={<IconId />}
            value={user!.id.toString()}
            mode={Mode.Default}
          />
        </Position>
        <Position type={"column"} gap={12} stretched></Position>
      </Position>
    );
  }

  return (
    <Modal.Page>
      {!uid || (!user && isLoadingUser) || !user
        ? renderPlaceholders()
        : renderContent()}
    </Modal.Page>
  );
};
