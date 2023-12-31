import {UserInterface} from "../model/user.interface";
import {AccessLevel} from "../constant/enum";

export const usersData: UserInterface[] = [
  {
    id: 1,
    email: '1@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-01').getTime(),
  },
  {
    id: 2,
    email: '2@gmail.com',
    isActive: true,
    accessLevel: AccessLevel.CONSULTANT,
    createdAt: new Date('2023-06-02').getTime(),
  },
  {
    id: 3,
    email: '3@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-03').getTime(),
  },
  {
    id: 4,
    email: '4@gmail.com',
    isActive: true,
    accessLevel: AccessLevel.CONSULTANT,
    createdAt: new Date('2023-06-04').getTime(),
  },
  {
    id: 5,
    email: '5@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-05').getTime(),
  },
  {
    id: 6,
    email: '6@gmail.com',
    isActive: true,
    accessLevel: AccessLevel.CONSULTANT,
    createdAt: new Date('2023-06-06').getTime(),
  },
  {
    id: 7,
    email: '7@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-07').getTime(),
  },
  {
    id: 8,
    email: '8@gmail.com',
    isActive: true,
    accessLevel: AccessLevel.CONSULTANT,
    createdAt: new Date('2023-06-08').getTime(),
  },
  {
    id: 9,
    email: '9@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-09').getTime(),
  },
  {
    id: 10,
    email: '10@gmail.com',
    isActive: true,
    accessLevel: AccessLevel.CONSULTANT,
    createdAt: new Date('2023-06-10').getTime(),
  },
  {
    id: 11,
    email: '11@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-11').getTime(),
  },
  {
    id: 12,
    email: '12@gmail.com',
    isActive: true,
    accessLevel: AccessLevel.CONSULTANT,
    createdAt: new Date('2023-06-12').getTime(),
  },
  {
    id: 13,
    email: '13@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-13').getTime(),
  },
  {
    id: 14,
    email: '14@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.CONSULTANT,
    createdAt: new Date('2023-06-14').getTime(),
  },
  {
    id: 15,
    email: '15@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-15').getTime(),
  },
  {
    id: 16,
    email: '16@gmail.com',
    isActive: true,
    accessLevel: AccessLevel.CONSULTANT,
    createdAt: new Date('2023-06-16').getTime(),
  },
  {
    id: 17,
    email: '17@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-17').getTime(),
  },
  {
    id: 18,
    email: '18@gmail.com',
    isActive: true,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-18').getTime(),
  },
  {
    id: 19,
    email: '19@gmail.com',
    isActive: false,
    accessLevel: AccessLevel.CONSULTANT,
    createdAt: new Date('2023-06-19').getTime(),
  },
  {
    id: 20,
    email: '20@gmail.com',
    isActive: true,
    accessLevel: AccessLevel.ADMIN,
    createdAt: new Date('2023-06-20').getTime(),
  },
];
