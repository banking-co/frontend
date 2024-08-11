export enum Modals {}

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export enum UserType {
  Bot = 0,
  User = 1,
}

export interface ExpModel {
  from: number;
  to: number;
  current: number;
}

export interface UserPersonalInfoModel {
  id: number;
  firstName: string;
  lastName: string;
  photo200: string;
}

export interface UserModel {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  personalInfo?: UserPersonalInfoModel;
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

export interface BusinessEmployeeModel {
  id: number;
  businessId: number;

  userType: UserType;
  roleName: string;
  salary: number;

  employerID: number;
  workerID: number;

  workerPersonalInfo: UserPersonalInfoModel;
  employerPersonalInfo: UserPersonalInfoModel;

  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface BonusModel {
  id: number;
  type: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface UserLevelModel {
  level: number;
  percentage: string;
  exp: ExpModel;
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
  GetBalances = "balance_get",
  Error = "error",
}
