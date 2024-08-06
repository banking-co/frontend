export enum Modals {}

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export interface ExpModel {
  from: number;
  to: number;
  current: number;
}

export interface UserModel {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface BalanceModel {
  id: number;
  importance: number;
  userId: number;
  amount: number;
  currency: Currency;
  createdAt: "2024-08-04T23:34:37.117+05:00";
  updateAt: "2024-08-04T23:34:37.117+05:00";
  deletedAt?: string;
}

export interface BusinessModel {
  id: number;
  userId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface UserLevelModel {
  level: number;
  percentage: string;
  exp: ExpModel;
}

export enum NewsEventsModel {
  Update = "update",
  Important = "important",
  Message = "message",
  Congratulation = "congratulation",

  PromoCode = "promo-code",
  Rating = "rating",
}

export interface EventNewsModel {
  type: NewsEventsModel;

  title: string;
  text: string;

  promoActivatedCount?: number;
  promoActiveCount?: number;
  promoCode?: string;

  createdAt?: number;
  expiredAt?: number;
  deletedAt?: number;
}

export enum Mode {
  Default = "default",
  Destroy = "destroy",
  Progress = "progress",
}

export enum Currency {
  Rub = "rub",
  Eur = "eur",
  Byn = "byn",
  Usd = "usd",
  Btc = "btc",
  Donate = "donate",
}

export enum TextCurrencyType {
  Dollar = "usd",
  Bitcoin = "btc",
  Donate = "donate",
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

export enum SocketEvent {
  ConnWebSocket = "conn_websocket",
  DiscWebSocket = "disc_websocket",
  StartApp = "start_app",
  GetBusiness = "get_business",
  GetPrimaryBusiness = "get_pr_business",
  Error = "error",
}
