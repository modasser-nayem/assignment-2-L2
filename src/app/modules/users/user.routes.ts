import express from 'express';
import { userControllers } from './user.controllers';

const router = express.Router();

router.post('/users', userControllers.createNewUser);
router.get('/users', userControllers.getAllUsers);
router.get('/users/:userId', userControllers.getSingleUser);
router.delete('/users/:userId', userControllers.deleteUser);

export const userRouters = router;
