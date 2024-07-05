import "./AppHeader.sass";

import { useNavigate } from "react-router-dom";

import { Text } from "uikit";

import { IconChevronLeft } from "@tabler/icons-react";

import type { AppHeaderProps } from "./AppHeader.interface";

export const AppHeader: AppHeaderProps = (props) => {
  const navigate = useNavigate();

  return (
    <div className="AppHeader">
      {props.withBack && !props.before && (
        <div className="AppHeader__icon--before" onClick={() => navigate(-1)}>
          <IconChevronLeft />
        </div>
      )}

      {!props.withBack && props.before && (
        <div className="AppHeader__icon--before">{props.before}</div>
      )}

      <div className="AppHeader__user">
        <img src="https://placehold.co/200x200/png" alt="" />

        <div>
          <Text tag="p" isSecondary text="Дмитрий М." />
        </div>
      </div>
    </div>
  );
};
