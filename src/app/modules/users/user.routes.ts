import express from 'express';
import { userControllers } from './user.controllers';

const router = express.Router();

router.post('/users', userControllers.createNewUser);
router.get('/users', userControllers.getAllUsers);
router.get('/users/:id', userControllers.getSingleUser);

export const userRouters = router;
