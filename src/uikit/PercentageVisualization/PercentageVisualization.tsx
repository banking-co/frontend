import "./PercentageVisualization.sass";

import { PercentageVisualizationProps } from "./PercentageVisualization.interface";
import { createMemo } from "solid-js";

export const PercentageVisualization: PercentageVisualizationProps = (
  props,
) => {
  const percentages = createMemo(() => {
    const sum = props.items.reduce((acc, curr) => acc + curr.value, 0);
    return props.items.map((item) => ({
      type: item.type,
      percent: (item.value * 100) / sum,
    }));
  });

  return (
    <div class="PercentageVisualization">
      {percentages().map((item) => {
        return (
          <div
            class="PercentageVisualization__item"
            classList={{
              [`PercentageVisualization__item_color--${item.type}`]: true,
            }}
            style={{ width: `${item.percent}%` }}
          />
        );
      })}
    </div>
  );
};
