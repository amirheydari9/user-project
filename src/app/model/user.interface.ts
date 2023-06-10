import {AccessLevel} from "../constant/enum";

export interface UserInterface {
  createdAt: string;
  email: string;
  isActive: boolean;
  accessLevel: AccessLevel;
}
