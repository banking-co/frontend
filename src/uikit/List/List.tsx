import "./List.sass";

import { useTranslation } from "i18nano";
import { throttle } from "lodash";
import { useRouter } from "hooks";

import { Grid, ListItem } from "uikit";

import type { ListProps } from "./List.interface";
import { RouteId } from "models";

const List: ListProps = (props) => {
  const t = useTranslation();
  const { goTo } = useRouter();

  const throttledNextPage = throttle(
    (value: RouteId) => value && goTo(value),
    250,
  );

  return props.items.map((item, index) => {
    return (
      <Grid
        title={t(item.title)}
        key={item.title + item.description + index}
        description={t(item.description)}
      >
        <div className="List">
          {item.children.map((item) => {
            switch (item.type) {
              case "route":
                return (
                  <ListItem.Pagination
                    key={`list-item-modal-${item.type}-${item.translate_key}-${item.to}`}
                    icon={item.icon}
                    title={t(item.translate_key) || item.translate_key}
                    onClick={() => throttledNextPage(item.to)}
                  />
                );
              case "modal":
                return (
                  <ListItem.Modal
                    key={`list-item-modal-${item.type}-${item.translate_key}`}
                    icon={item.icon}
                    title={t(item.translate_key) || item.translate_key}
                    modal={item.modal}
                  />
                );
              case "switch":
                return (
                  <ListItem.Switch
                    key={`list-item-modal-${item.type}-${item.translate_key}`}
                    icon={item.icon}
                    title={t(item.translate_key) || item.translate_key}
                  />
                );
              case "edit":
                return (
                  <ListItem.Edit
                    key={`list-item-edit-${item.type}-${item.translate_key}`}
                    icon={item.icon}
                    title={t(item.translate_key) || item.translate_key}
                    modal={item.modal}
                  />
                );
              default:
                return;
            }
          })}
        </div>
      </Grid>
    );
  });
};

export { List };
