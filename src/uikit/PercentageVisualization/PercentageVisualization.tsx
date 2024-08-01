import "./PercentageVisualization.sass";

import { useMemo } from "react";
import classNames from "classnames";

import { PercentageVisualizationProps } from "./PercentageVisualization.interface";

export const PercentageVisualization: PercentageVisualizationProps = (
  props,
) => {
  const percentages = useMemo(() => {
    const sum = props.items.reduce((acc, curr) => acc + curr.value, 0);
    return props.items.map((item) => ({
      type: item.type,
      percent: (item.value * 100) / sum,
    }));
  }, [props.items]);

  return (
    <div className="PercentageVisualization">
      {percentages.map((item) => {
        return (
          <div
            key={`${item.type}-${item.percent}-percentage`}
            className={classNames("PercentageVisualization__item", {
              [`PercentageVisualization__item_color--${item.type}`]: true,
            })}
            style={{ width: `${item.percent}%` }}
          />
        );
      })}
    </div>
  );
};
