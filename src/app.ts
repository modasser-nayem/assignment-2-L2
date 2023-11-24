import express, { Application, NextFunction, Request, Response } from 'express';
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: 'Something Went wrong!',
    error: {
      code: 500,
      description: err.message,
    },
  });
  next();
});

export default app;
