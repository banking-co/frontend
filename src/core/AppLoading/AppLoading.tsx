import "./AppLoading.sass";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "i18nano";
import { queueExecute } from "utils";
import classNames from "classnames";

import { Placeholder, Spinner, StepByStep } from "uikit";

import { realtimeSelector } from "store/realtime";

import { AppLoadingProps } from "./AppLoading.interface";

export const AppLoading: AppLoadingProps = (props) => {
  const t = useTranslation();
  const { isConnected, isLoggedIn } = useSelector(realtimeSelector);
  const [isLoading, setLoading] = useState(true);
  const [isClose, setClose] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | undefined>(undefined);

  useEffect(() => {
    if (isConnected && !step) {
      queueExecute(() => {
        setStep(1);
      }, 1000);
    }

    if (isLoggedIn && Number(step) >= 1) {
      queueExecute(() => {
        setStep(2);
      }, 1000);
    }

    if (isLoggedIn && isConnected && Number(step) >= 2) {
      queueExecute(() => {
        setStep(3);
      }, 1000);
    }
  }, [isConnected, isLoggedIn, step]);

  if (isLoading)
    return (
      <Placeholder
        isFullScreen
        className={classNames({
          "AppLoading_animation-fade_out": isClose,
        })}
      >
        <StepByStep
          isLoadable
          items={[
            {
              step: 1,
              header: t("app.loading.steps.connect.header"),
              text: t("app.loading.steps.connect.text"),
            },
            {
              step: 2,
              header: t("app.loading.steps.logged.header"),
              text: t("app.loading.steps.logged.text"),
            },
            {
              step: 3,
              header: t("app.loading.steps.final.header"),
              text: t("app.loading.steps.final.text"),
              isFinal: true,
            },
          ]}
          currentStep={step}
          onFinal={() => {
            setClose(true);

            setTimeout(() => {
              setLoading(false);
            }, 700);
          }}
        />
      </Placeholder>
    );

  return <>{props.children}</>;
};
