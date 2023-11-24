import { IOrder } from '../users/user.interface';
import { User } from '../users/user.model';

// create and update new orders
const createNewOrder = async (userId: number, orderData: IOrder) => {
  if (!(await User.isUserExistByUserId(userId))) {
    throw new Error('User not found!');
  }
  const result = User.findOneAndUpdate(
    { userId },
    { $push: { orders: orderData } },
  );

  return result;
};

// Get all orders
const getAllOrders = async (userId: number) => {
  if (!(await User.isUserExistByUserId(userId))) {
    throw new Error('User not found!');
  }
  const result = User.findOne({ userId }, { orders: 1, _id: 0 });
  return result;
};

// Calculate Total Price of Orders
const calculateTotalOrdersPrice = async (userId: number) => {
  if (!(await User.isUserExistByUserId(userId))) {
    throw new Error('User not found!');
  }

  const result = User.aggregate([
    { $match: { userId } },
    { $unwind: '$orders' },
    {
      $project: {
        totalPrice: { $multiply: ['$orders.price', '$orders.quantity'] },
      },
    },
    { $group: { _id: null, totalPrice: { $sum: '$totalPrice' } } },
    { $project: { _id: 0 } },
  ]);
  return result;
};

export const orderServices = {
  createNewOrder,
  getAllOrders,
  calculateTotalOrdersPrice,
};
