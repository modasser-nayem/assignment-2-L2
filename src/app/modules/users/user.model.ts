import { Document, Query, Schema, model } from 'mongoose';
import { IUser, IUserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

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
  },
});
// Pre middleware
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.BCRYPT_SALT_ROUNDS),
  );
  next();
});

userSchema.pre('find', function (this: Query<IUser, Document>, next) {
  this.find();
  next();
});

// Post middleware
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// Create a custom Static method
userSchema.statics.isUserExist = async function (filed: string, value: any) {
  const existUser = await User.findOne({ filed: value });
  return existUser;
};

userSchema.statics.isUserExistById = async function (id: string) {
  const existUser = await User.findById(id);
  return existUser;
};

export const User = model<IUser, IUserModel>('User', userSchema);
