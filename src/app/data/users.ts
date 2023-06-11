import {UserInterface} from "../model/user.interface";
import {AccessLevel} from "../constant/enum";

export const usersData: UserInterface[] = [
  {id: 1, email: '1@gmail.com', isActive: false, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-01',},
  {id: 2, email: '2@gmail.com', isActive: true, accessLevel: AccessLevel.CONSULTANT, createdAt: '2022-01-02',},
  {id: 3, email: '3@gmail.com', isActive: false, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-03',},
  {id: 4, email: '4@gmail.com', isActive: true, accessLevel: AccessLevel.CONSULTANT, createdAt: '2022-01-04',},
  {id: 5, email: '5@gmail.com', isActive: false, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-05',},
  {id: 6, email: '6@gmail.com', isActive: true, accessLevel: AccessLevel.CONSULTANT, createdAt: '2022-01-06',},
  {id: 7, email: '7@gmail.com', isActive: false, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-07',},
  {id: 8, email: '8@gmail.com', isActive: true, accessLevel: AccessLevel.CONSULTANT, createdAt: '2022-01-08',},
  {id: 9, email: '9@gmail.com', isActive: false, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-09',},
  {id: 10, email: '10@gmail.com', isActive: true, accessLevel: AccessLevel.CONSULTANT, createdAt: '2022-01-10',},
  {id: 11, email: '11@gmail.com', isActive: false, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-11',},
  {id: 12, email: '12@gmail.com', isActive: true, accessLevel: AccessLevel.CONSULTANT, createdAt: '2022-01-12',},
  {id: 13, email: '13@gmail.com', isActive: false, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-13',},
  {id: 14, email: '14@gmail.com', isActive: false, accessLevel: AccessLevel.CONSULTANT, createdAt: '2022-01-14',},
  {id: 15, email: '15@gmail.com', isActive: false, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-15',},
  {id: 16, email: '16@gmail.com', isActive: true, accessLevel: AccessLevel.CONSULTANT, createdAt: '2022-01-16',},
  {id: 17, email: '17@gmail.com', isActive: false, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-17',},
  {id: 18, email: '18@gmail.com', isActive: true, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-18',},
  {id: 19, email: '19@gmail.com', isActive: false, accessLevel: AccessLevel.CONSULTANT, createdAt: '2022-01-19',},
  {id: 20, email: '20@gmail.com', isActive: true, accessLevel: AccessLevel.ADMIN, createdAt: '2022-01-20',},
];
