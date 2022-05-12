import { Customer } from "./customer.model";
import { Role } from "./role.model";

export enum ROLE {
  superadmin = "super_admin",
  admin = "admin",
  subscriber = "subscriber",
}
export class User {
  id!: number;
  firstName!: string;
  middleName?: string;
  lastname!: string;
  email!: string;
  phone!: string;
  address!: string;
  role!: ROLE;
  createdon?: string;
  modifiedon?: string;
  customer?: Customer;
  roles?: Role;



}