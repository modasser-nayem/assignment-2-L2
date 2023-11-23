import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from './user.interface';

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    firstName: String,
    lastName: String,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  hobbies: Array,
  address: {
    street: String,
    city: String,
    country: String,
  },
  orders: {
    type: [
      {
        productName: String,
        price: Number,
        quantity: Number,
      },
    ],
    required: true,
  },
});

// Create a custom Static method
userSchema.statics.isUserExistById = async function (userId: number) {
  const existUser = await User.findOne({ userId: userId });
  return existUser;
};

userSchema.statics.isUserExistByUsername = async function (username: string) {
  const existUser = await User.findOne({ username: username });
  return existUser;
};

export const User = model<IUser, IUserModel>('User', userSchema);
