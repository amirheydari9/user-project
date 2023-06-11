import {AccessLevel} from "../constant/enum";

export interface UserInterface {
  id: number;
  createdAt: string;
  email: string;
  isActive: boolean;
  accessLevel: AccessLevel;
}
