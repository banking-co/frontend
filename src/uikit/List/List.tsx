import "./List.sass";

import { useNavigate } from "@solidjs/router";
import { throttle } from "lodash";

import { ListItem } from "uikit";

import type { ListProps, ListItemModel } from "./List.interface";

const List: ListProps = (props) => {
  const navigation = useNavigate();

  const throttledNextPage = throttle(
    (value: string | undefined | false) =>
      value && navigation(value.toString()),
    250,
  );

  return (
    <div class="List">
      {props.items.map((item) => {
        return (
          <ListItem
            key={`list-item-${item.to}`}
            icon={item.icon}
            title={item.title}
            disablePropagation={item.disablePropagation}
            onClick={() =>
              throttledNextPage(!item.disablePropagation && item.to)
            }
          />
        );
      })}
    </div>
  );
};

export { List, ListItemModel };
