import UserPermission from '../../../entities/enums/UserPermission';

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  permission: UserPermission;
}
