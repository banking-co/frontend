import "./StepByStep.sass";

import { useEffect } from "react";
import classNames from "classnames";

import { Spinner, Text } from "uikit";

import { IconCircleCheck } from "@tabler/icons-react";

import type { StepByStepProps } from "./StepByStep.interface";

export const StepByStep: StepByStepProps = ({
  currentStep = 0,
  onFinal,
  items,
  isLoadable,
}) => {
  useEffect(() => {
    if (currentStep >= items[items.length - 1].step) {
      onFinal && onFinal(currentStep);
    }
  }, [currentStep, items, onFinal]);

  return (
    <div className="StepByStep">
      {items.map((s) => (
        <div
          key={`step-by-step-id-${s.step}`}
          className={classNames("StepByStep__item", {
            "StepByStep__item--active": currentStep >= s.step,
          })}
        >
          <div className="StepByStep__icon">
            <Text text={s.step.toString()} tag="h2" />
          </div>
          <div className="StepByStep__text">
            <Text text={s.header} tag="p" isBold />
            <Text text={s.text} tag="p" isMuted />
          </div>
          {isLoadable &&
            (currentStep >= s.step ? (
              <IconCircleCheck color="var(--green)" size={32} />
            ) : (
              currentStep === s.step - 1 && <Spinner size="small" />
            ))}
        </div>
      ))}
    </div>
  );
};
