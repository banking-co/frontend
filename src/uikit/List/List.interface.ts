import type { FC, HTMLAttributes } from "react";
import { ListItemsModel } from "models";

interface ListParams extends HTMLAttributes<HTMLElement> {
  items: ListItemsModel;
}

export type ListProps = FC<ListParams>;
