import { ReactNode } from "react";

export interface ModelsDefaultKeys {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface DefaultListItemsParams {
  icon: ReactNode;
  translate_key: string;
}
