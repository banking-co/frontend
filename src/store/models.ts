export enum Modals {}

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export enum UserType {
  Bot = 0,
  User = 1,
}

export interface ModelsDefaultKeys {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
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
  photo50: string;
  photo100: string;
  photo200: string;
  photoMax: string;
}

export interface UserModel extends ModelsDefaultKeys {
  username: string;
  personalInfo?: UserPersonalInfoModel;
}

export interface BalanceModel extends ModelsDefaultKeys {
  importance: number;
  userId: number;
  amount: number;
  currency: Currency;
}

export interface BusinessModel extends ModelsDefaultKeys {
  userId: number;
  name: string;
}

export interface BusinessEmployeeModel extends ModelsDefaultKeys {
  businessId: number;

  userType: UserType;
  roleId: string;
  salary: number;

  employerID: number;
  workerID: number;

  workerPersonalInfo: UserPersonalInfoModel;
  employerPersonalInfo: UserPersonalInfoModel;
}

export interface BusinessEmployerRoleModel extends ModelsDefaultKeys {
  bankId: number;
  roleId: number;
  roleName: string;
}

export interface BonusModel extends ModelsDefaultKeys {
  type: string;
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
  Primary = "primary",
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
  Open = "open",
  Close = "close",
  Message = "message",

  ConnWebSocket = "conn_websocket",
  DiscWebSocket = "disc_websocket",
  StartApp = "start_app",

  Ping = "ping",
  Pong = "pong",

  GetBalances = "balance_get",

  GetBusiness = "get_business",
  GetPrimaryBusiness = "get_pr_business",
  GetBusinessStaff = "get_st_business",

  Error = "error",
}
