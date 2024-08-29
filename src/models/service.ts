import { DefaultListItemsParams } from "./default";

export interface Gesture {
  startX?: number;
  startY?: number;
  startT?: Date;
  isPressed?: boolean;
  isY?: boolean;
  isX?: boolean;
  isSlideX?: boolean;
  isSlideY?: boolean;
  isSlide?: boolean;
  shiftX?: number;
  shiftY?: number;
  shiftXAbs?: number;
  shiftYAbs?: number;
}

export interface GestureEvent extends Gesture {
  originalEvent: TouchEvent | MouseEvent;
}

export enum Device {
  Desktop = "desktop",
  Mobile = "mobile",
}

export enum Platform {
  Desktop = "desktop",
  iOS = "ios",
  Android = "android",
}

export enum Modals {
  UserProfile = "user_profile",
  Bonus = "bonus",
  Currency = "currency",
  RenameBank = "rename_bank",
  BankRating = "bank_rating",
}

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export enum Mode {
  Default = "default",
  Destroy = "destroy",
  Progress = "progress",
  Primary = "primary",
}

export type ListItemsModel = Array<{
  title: string;
  description: string;
  children: Array<
    (
      | { type: "route"; to: RouteId }
      | { type: "switch"; onSwitch: Function }
      | { type: "modal"; modal: Modals }
      | { type: "edit"; modal: Modals }
    ) &
      DefaultListItemsParams
  >;
}>;

export enum RouteId {
  App = "app",
  Fallback = "fallback",
  Profile = "profile",
  Settings = "settings",

  Management = "management",
  ManagementEmployeeList = "management-employee-list",
  ManagementEmployeeSearch = "management-employee-search",
  ManagementBusinessRating = "management-business-rating",
  ManagementBusinessTransactions = "management-business-transactions",
  ManagementContractsList = "management-contracts-list",
  ManagementEmployeeSalary = "management-employee-salary",
  ManagementEmployeeDismiss = "management-employee-dismiss",
  ManagementBoostUpgrade = "management-boost-upgrade",
  ManagementTaxPay = "management-tax-pay",
  ManagementTaxBenefits = "management-tax-benefits",
  ManagementTaxReduce = "management-tax-reduce",

  Menu = "menu",
  MenuStoreStock = "menu-store-stock",
  MenuStoreStore = "menu-store-store",
  MenuStoreDonate = "menu-store-donate",
  MenuStoreMarket = "menu-store-market",
  MenuStoreAuction = "menu-store-auction",
}
