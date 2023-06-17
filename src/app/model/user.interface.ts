import {AccessLevel} from "../constant/enum";

export interface UserInterface {
  id: number;
  createdAt: number;
  email: string;
  isActive: boolean;
  accessLevel: AccessLevel;
}
