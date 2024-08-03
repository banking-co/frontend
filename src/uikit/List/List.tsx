import "./List.sass";

import { useNavigate } from "react-router-dom";
import { throttle } from "lodash";

import { ListItem } from "uikit";

import type { ListProps, ListItemsType } from "./List.interface";

const List: ListProps = (props) => {
  const navigation = useNavigate();

  const throttledNextPage = throttle(
    (value: string | undefined | false) =>
      value && navigation(value.toString()),
    250,
  );

  return (
    <div className="List">
      {props.items.map((item) => {
        switch (item.type) {
          case "pagination":
            return (
              <ListItem.Pagination
                key={`list-item-${item.to}`}
                icon={item.icon}
                title={item.title}
                disablePropagation={item.disablePropagation}
                onClick={() =>
                  throttledNextPage(!item.disablePropagation && item.to)
                }
              />
            );
          case "switch":
            return <ListItem.Switch icon={item.icon} title={item.title} />;
          default:
            return;
        }
      })}
    </div>
  );
};

export { List, ListItemsType };
