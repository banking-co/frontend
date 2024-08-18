import { ModelsDefaultKeys } from "models";

export enum ItemType {
  ItemTypeBusinessStaff = "business_staff",
  ItemTypeBusinessUpgrade = "business_upgrade",
  ItemTypeUserUpgrade = "user_upgrade",
}

export enum ItemRarity {
  ItemRarityDefault = "common",
  ItemRarityUncommon = "uncommon",
  ItemRarityRare = "rare",
  ItemRarityEpic = "epic",
  ItemRarityLegendary = "legendary",
}

export interface ItemModel extends ModelsDefaultKeys {
  name: string;
  cost: number;

  type: ItemType;
  rarity: ItemRarity;

  isBuyable: boolean;
  isSellable: boolean;
}
