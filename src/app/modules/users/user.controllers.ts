import { Request, Response } from 'express';
import { userServices } from './user.services';
import { userValidation } from './user.validation';

const createNewUser = async (req: Request, res: Response) => {
  try {
    const studentData = req.body;
    const zodParseData = userValidation.parse(studentData);

    const result = await userServices.createNewUser(zodParseData);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: {
        code: 500,
        description: error.issues || error.message,
      },
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
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

export const userControllers = { getAllUsers, createNewUser };
