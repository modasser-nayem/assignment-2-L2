import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';
import cors from 'cors';
import { userRouters } from './app/modules/users/user.routes';
import { ordersRouters } from './app/modules/orders/order.routes';
const app: Application = express();

// parser use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Application Routes
app.use('/api', userRouters);
app.use('/api/users', ordersRouters);

// root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome Back Assignment-2');
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars, @typescript-eslint/no-unused-vars
app.use(((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: 'Something Went wrong!',
    error: {
      code: 500,
      description: err.message,
    },
  });
  next(err);
}) as ErrorRequestHandler);

export default app;
