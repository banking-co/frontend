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
  fullName: string;
  firstName: string;
  lastName: string;
  id: number | string;
  photo: string;
  exp: ExpModel;
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
  RUB = "rub",
  EUR = "eur",
  BYN = "byn",
  USD = "usd",
}

export enum TextCurrencyType {
  Dollar = "dollar",
  Bitcoin = "bitcoin",
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
}
