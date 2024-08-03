import { useTranslation } from "i18nano";

import { Grid, List, Position } from "uikit";

import { itemsIds, itemsIcons } from "./Management.constants";

import type { ManagementProps } from "./Management.interface";

export const Management: ManagementProps = () => {
  const t = useTranslation();

  return (
    <Position type="column" gap={24}>
      {Object.keys(itemsIds).map((key) => (
        <Grid
          key={key}
          title={t(`management.${key}.title`)}
          description={t(`management.${key}.description`)}
        >
          <List
            items={itemsIds[key].map((subKey) => ({
              type: "pagination",
              icon: itemsIcons[subKey],
              title: t(`management.${key}.${subKey}`),
              to: `/${subKey}`,
            }))}
          />
        </Grid>
      ))}
    </Position>
  );
};
