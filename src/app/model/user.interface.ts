import {AccessLevel, UserStatus} from "../constant/enum";

export interface UserInterface {
  createdAt: string;
  email: string;
  status: UserStatus;
  accessLevel: AccessLevel;
}
