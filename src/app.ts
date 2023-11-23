import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRouters } from './app/modules/users/user.routes';
const app: Application = express();

// parser use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Application Routes
app.use('/api', userRouters);

// root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome Back Assignment-2');
});

export default app;
