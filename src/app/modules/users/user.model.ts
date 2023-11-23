import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

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
  orders: [
    {
      productName: String,
      price: Number,
      quantity: Number,
    },
  ],
});

export const User = model('User', userSchema);
