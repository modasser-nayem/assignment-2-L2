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
  isUserExist(filed: string, value: any): Promise<IUser | null>;
  isUserExistById(id: string): Promise<IUser | null>;
}
