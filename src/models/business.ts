import { ModelsDefaultKeys, UserPersonalInfoModel, UserType } from "models";

export interface BusinessModel extends ModelsDefaultKeys {
  userId: number;
  name: string;
}

export interface BusinessEmployeeModel extends ModelsDefaultKeys {
  businessId: number;

  userType: UserType;
  roleId: string;
  salary: number;

  employerId: number;
  workerId: number;

  workerPersonalInfo: UserPersonalInfoModel;
  employerPersonalInfo: UserPersonalInfoModel;
}

export interface BusinessEmployerRoleModel extends ModelsDefaultKeys {
  bankId: number;
  roleId: number;
  roleName: string;
}
