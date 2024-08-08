import "./AppHeader.sass";

import { useNavigate } from "react-router-dom";

import { AppUserFootnote } from "uikit";

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

      <AppUserFootnote />
    </div>
  );
};
