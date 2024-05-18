import "./AppHeader.sass";

import { useNavigate } from "@solidjs/router";

import { Text } from "uikit";

import { IconChevronLeft } from "assets/icons";

import type { AppHeaderProps } from "./AppHeader.interface";

export const AppHeader: AppHeaderProps = (props) => {
  const navigate = useNavigate();

  return (
    <header class="AppHeader">
      {props.withBack && !props.before && (
        <div class="AppHeader__icon--before" onClick={() => navigate(-1)}>
          <IconChevronLeft />
        </div>
      )}

      {!props.withBack && props.before && (
        <div class="AppHeader__icon--before">{props.before}</div>
      )}

      <div>
        <div class="AppHeader__user">
          <img src="https://placehold.co/200x200/png" alt="" />

          <div>
            <Text tag="p" isSecondary text="Дмитрий М." />
          </div>
        </div>
      </div>
    </header>
  );
};
