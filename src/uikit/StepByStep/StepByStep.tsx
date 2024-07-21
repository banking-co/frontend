import "./StepByStep.sass";

import classNames from "classnames";

import { Spinner, Text } from "uikit";

import type { StepByStepProps } from "./StepByStep.interface";
import { useEffect } from "react";
import { IconCircleCheck } from "@tabler/icons-react";

export const StepByStep: StepByStepProps = ({
  currentStep,
  onFinal,
  items,
  isLoadable,
}) => {
  useEffect(() => {
    if (currentStep && currentStep >= items[items.length - 1].step) {
      onFinal && onFinal(currentStep);
    }
  }, [currentStep, items, onFinal]);

  return (
    <div className="StepByStep">
      {items.map((i) => (
        <div
          key={`step-by-step-id-${i.step}`}
          className={classNames({
            StepByStep__item: true,
            "StepByStep__item--active": Number(currentStep) >= i.step,
          })}
        >
          <div className="StepByStep__icon">
            <Text text={i.step.toString()} tag="h2" />
          </div>
          <div className="StepByStep__text">
            <Text text={i.header} tag="p" isBold />
            <Text text={i.text} tag="p" isMuted />
          </div>
          {isLoadable && currentStep === i.step && <Spinner size="small" />}
          {isLoadable && currentStep && currentStep > i.step && (
            <IconCircleCheck color="var(--green)" size={32} />
          )}
        </div>
      ))}
    </div>
  );
};
