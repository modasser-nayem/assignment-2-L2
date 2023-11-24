import { z } from 'zod';

export const orderSchemaValidator = z.object({
  productName: z.string({
    required_error: 'Please provide a Product Name',
  }),
  price: z.number({ required_error: 'Please provide a price' }),
  quantity: z.number({ required_error: 'Please provide a Quantity' }),
});

export const userValidation = z.object({
  userId: z.number({
    required_error: 'Please provide a userId',
    invalid_type_error: 'userId must be a number',
  }),
  username: z.string({
    required_error: 'Please provide a username',
    invalid_type_error: 'username must be a string',
  }),
  password: z
    .string({ required_error: 'Please provide a password' })
    .min(4, { message: 'Password must be greater then 4 character' }),
  fullName: z.object({
    firstName: z.string({ required_error: 'Please provide a firstName' }),
    lastName: z.string({ required_error: 'Please provide a LastName' }),
  }),
  age: z.number({
    required_error: 'Please provide a age',
    invalid_type_error: 'age must be a number',
  }),
  email: z
    .string({ required_error: 'Please provide a email' })
    .email({ message: 'invalid email address' }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string({ required_error: 'Please provide a street' }),
    city: z.string({ required_error: 'Please provide a city' }),
    country: z.string({ required_error: 'Please provide a country' }),
  }),
  orders: z.optional(z.array(orderSchemaValidator)),
});
