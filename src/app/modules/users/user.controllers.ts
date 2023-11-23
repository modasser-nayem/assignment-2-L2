import { Request, Response } from 'express';
import { userServices } from './user.services';

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = userServices.getAllUsers();
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 500,
        description: error.message,
      },
    });
  }
};

export const userControllers = { getAllUsers };
