import { ModelsDefaultKeys } from "models/default";

export enum UserType {
  Bot = 0,
  User = 1,
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
