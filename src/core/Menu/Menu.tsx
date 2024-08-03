import { useTranslation } from "i18nano";

import { Grid, List, Position } from "uikit";

import { itemsIds, itemsIcons } from "./Menu.constants";

import type { MenuProps } from "./Menu.interface";

export const Menu: MenuProps = () => {
  const t = useTranslation();

  return (
    <Position type="column" gap={24}>
      {Object.keys(itemsIds).map((key) => (
        <Grid
          key={key}
          title={t(`menu.${key}.title`)}
          description={t(`menu.${key}.description`)}
        >
          <List
            items={itemsIds[key].map((subKey) => ({
              type: "pagination",
              icon: itemsIcons[subKey],
              title: t(`menu.${key}.${subKey}`),
              to: `/menu/${key}/${subKey}`,
            }))}
          />
        </Grid>
      ))}
    </Position>
  );
};
