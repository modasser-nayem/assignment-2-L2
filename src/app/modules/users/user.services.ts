import { IUser } from './user.interface';
import { User } from './user.model';

const createNewUser = async (userData: IUser) => {
  if (await User.isUserExistById(userData.userId)) {
    throw new Error('UserId already exists!');
  }
  if (await User.isUserExistByUsername(userData.username)) {
    throw new Error('Username already exists!');
  }
  const result = await User.create(userData);
  return result;
};

// testing
const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

export const userServices = { getAllUsers, createNewUser };
