import "./AppUserFootnote.sass";

import { UnitName } from "uikit";

import type { AppUserFootnoteProps } from "./AppUserFootnote.interface";
import { useUser } from "hooks";
import { IconUser } from "@tabler/icons-react";

export const AppUserFootnote: AppUserFootnoteProps = () => {
  const user = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="AppUserFootnote__user">
      {user.personalInfo?.photo200 ? (
        <img src="https://placehold.co/200x200/png" alt="" />
      ) : (
        <IconUser color="var(--gray)" />
      )}

      <UnitName isShortLastName />
    </div>
  );
};
