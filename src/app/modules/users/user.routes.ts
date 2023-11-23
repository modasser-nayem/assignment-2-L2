import express from 'express';
import { userControllers } from './user.controllers';

const router = express.Router();

router.post('/users', userControllers.createNewUser);
router.get('/users', userControllers.getAllUsers);

export const userRouters = router;
