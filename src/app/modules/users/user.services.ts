import { IUser } from './user.interface';
import { User } from './user.model';

const createNewUser = async (userData: IUser) => {
  if (await User.isUserExistById(userData.userId)) {
    throw new Error('UserId already exists!');
  }
  if (await User.isUserExistByUsername(userData.username)) {
    throw new Error('Username already exists!');
  }
  const result = User.create(userData);
  return result;
};

// testing
const getAllUsers = () => {
  const users = [
    { _id: 1, name: 'Nayem', age: 21 },
    { _id: 1, name: 'Sayem', age: 23 },
    { _id: 1, name: 'Rakib', age: 21 },
    { _id: 1, name: 'Raju', age: 14 },
    { _id: 1, name: 'Bablu', age: 27 },
  ];
  return users;
};

export const userServices = { getAllUsers, createNewUser };
