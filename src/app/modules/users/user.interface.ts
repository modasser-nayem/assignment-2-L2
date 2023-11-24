import { Model } from 'mongoose';

export interface IOrder {
  productName: string;
  price: number;
  quantity: number;
}
export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?: IOrder[];
}

// mongoose custom static method interface
export interface IUserModel extends Model<IUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExistByUserId(userId: number): Promise<IUser | null>;
  // eslint-disable-next-line no-unused-vars
  isUserExistByUsername(username: string): Promise<IUser | null>;
}
