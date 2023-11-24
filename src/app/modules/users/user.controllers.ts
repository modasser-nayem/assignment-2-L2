import { Request, Response } from 'express';
import { userServices } from './user.services';
import { userValidation } from './user.validation';

const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const zodParseData = userValidation.safeParse(userData);
    if (zodParseData.success) {
      const result = await userServices.createNewUser(zodParseData.data);
      res.status(200).json({
        success: true,
        message: 'User created successfully!',
        data: result,
      });
    } else {
      res.status(400).json({
        success: true,
        message: 'User created Failed!',
        error: {
          code: 400,
          path: zodParseData.error.issues[0].path[0],
          description: zodParseData.error.issues[0].message,
        },
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: {
        code: 500,
        description: error.message,
      },
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: {
        code: 500,
        description: 'Something went wrong!, try again',
      },
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getSingleUser(Number(req.params.userId));
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line
  } catch (error: any) {
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

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const userId = req.params.userId;
    const zodParseData = userValidation.safeParse(userData);
    if (zodParseData.success) {
      const result = await userServices.updateUser(
        Number(userId),
        zodParseData.data,
      );
      res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: result,
      });
    } else {
      res.status(400).json({
        success: true,
        message: 'User updated Failed!',
        error: {
          code: 400,
          path: zodParseData.error.issues[0].path[0],
          description: zodParseData.error.issues[0].message,
        },
      });
    }
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User updated failed!',
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    await userServices.deleteUser(Number(req.params.userId));
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'User deleted Failed!',
      error: {
        code: 400,
        description: 'User not found!',
      },
    });
  }
};

export const userControllers = {
  getAllUsers,
  createNewUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
