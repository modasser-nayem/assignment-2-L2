import express from 'express';
import { userControllers } from './user.controllers';

const router = express.Router();

router.get('/users', userControllers.getAllUsers);

export const userRouters = router;
