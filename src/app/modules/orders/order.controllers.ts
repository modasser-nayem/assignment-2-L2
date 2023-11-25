import { Request, Response } from 'express';
import { orderServices } from './order.services';
import { orderSchemaValidator } from '../users/user.validation';

const createNewOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orderData = req.body;
    const zodParseOrderData = orderSchemaValidator.safeParse(orderData);
    if (zodParseOrderData.success) {
      await orderServices.createNewOrder(
        Number(userId),
        zodParseOrderData.data,
      );
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: null,
      });
    } else {
      res.status(400).json({
        success: true,
        message: 'Order created Failed!',
        error: {
          code: 400,
          path: zodParseOrderData.error.issues[0].path[0],
          description: zodParseOrderData.error.issues[0].message,
        },
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await orderServices.getAllOrders(Number(userId));
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const calculateTotalOrdersPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await orderServices.calculateTotalOrdersPrice(
      Number(userId),
    );
    if (Array.isArray(result) && result.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No have any Order!',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'User not found!',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const orderControllers = {
  createNewOrder,
  getAllOrders,
  calculateTotalOrdersPrice,
};
