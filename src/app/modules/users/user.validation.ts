import { z } from 'zod';

export const userValidation = z.object({
  userId: z.number(),
  username: z.string({ required_error: 'Please provide username' }),
  password: z
    .string()
    .min(6, { message: 'Password must be greater then 5 character' }),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number(),
  email: z.string().email({ message: 'invalid email address' }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  orders: z
    .array(
      z.object({
        productName: z.string(),
        price: z.number(),
        quantity: z.number(),
      }),
    )
    .optional(),
});
