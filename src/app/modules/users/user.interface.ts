import { Model } from 'mongoose';

interface Order {
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
  orders?: Order[];
}

// mongoose custom static method interface
export interface IUserModel extends Model<IUser> {
  isUserExistByUserId(userId: number): Promise<IUser | null>;
  isUserExistByUsername(username: string): Promise<IUser | null>;
}
