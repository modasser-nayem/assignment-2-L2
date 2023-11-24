import { IUser } from './user.interface';
import { User } from './user.model';

const createNewUser = async (userData: IUser) => {
  if (await User.isUserExistByUserId(userData.userId)) {
    throw new Error('UserId already exists!');
  }
  if (await User.isUserExistByUsername(userData.username)) {
    throw new Error('Username already exists!');
  }
  const result = await User.create(userData);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find(
    {},
    {
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      address: 1,
    },
  );
  return result;
};

const getSingleUser = async (userId: number) => {
  if (!(await User.isUserExistByUserId(userId))) {
    throw new Error('User not found!');
  }
  const result = await User.findOne(
    { userId },
    {
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
    },
  );
  return result;
};

const deleteUser = async (userId: number) => {
  if (!(await User.isUserExistByUserId(userId))) {
    throw new Error('User not found!');
  }
  const result = await User.findOneAndDelete({ userId });
  return result;
};

export const userServices = {
  getAllUsers,
  createNewUser,
  getSingleUser,
  deleteUser,
};
