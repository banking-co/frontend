import type { FC } from "react";

interface StepByStepItem {
  step: number;
  header: string;
  text: string;
  isFinal?: boolean;
}

interface StepByStepParams {
  items: Array<StepByStepItem>;
  currentStep: number | undefined;
  onFinal?: (step: number) => void;
  isLoadable?: boolean;
}

export type StepByStepProps = FC<StepByStepParams>;
