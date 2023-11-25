import { z } from 'zod';

export const orderSchemaValidator = z.object({
  productName: z
    .string({
      required_error: 'Please provide a Product Name',
    })
    .min(3, { message: 'Product name must be greater then 2 character' })
    .trim(),
  price: z.number({ required_error: 'Please provide a price' }).min(1, {
    message: 'Product price must be greater then 0',
  }),
  quantity: z.number({ required_error: 'Please provide a Quantity' }).min(1, {
    message: 'Product Quantity must be greater then 0',
  }),
});

export const userValidation = z.object({
  userId: z
    .number({
      required_error: 'Please provide a userId',
      invalid_type_error: 'userId must be a number',
    })
    .min(1, {
      message: 'UserId must be greater then 0',
    }),
  username: z
    .string({
      required_error: 'Please provide a username',
      invalid_type_error: 'username must be a string',
    })
    .min(3, { message: 'username must be greater then 2 character' })
    .trim(),
  password: z
    .string({ required_error: 'Please provide a password' })
    .min(4, { message: 'Password must be greater then 3 character' })
    .trim(),
  fullName: z.object({
    firstName: z
      .string({ required_error: 'Please provide a firstName' })
      .min(3, { message: 'First Name must be greater then 2 character' })
      .trim(),
    lastName: z
      .string({ required_error: 'Please provide a LastName' })
      .min(3, { message: 'Last Name must be greater then 2 character' })
      .trim(),
  }),
  age: z
    .number({
      required_error: 'Please provide a age',
      invalid_type_error: 'age must be a number',
    })
    .min(1, {
      message: 'Age must be greater then 0',
    }),
  email: z
    .string({ required_error: 'Please provide a email' })
    .email({ message: 'invalid email address' })
    .trim(),
  isActive: z.boolean(),
  hobbies: z.array(
    z
      .string()
      .min(3, { message: 'Hobbies must be greater then 2 character' })
      .trim(),
  ),
  address: z.object({
    street: z
      .string({ required_error: 'Please provide a street' })
      .min(3, { message: 'Street must be greater then 2 character' })
      .trim(),
    city: z
      .string({ required_error: 'Please provide a city' })
      .min(3, { message: 'City must be greater then 2 character' })
      .trim(),
    country: z
      .string({ required_error: 'Please provide a country' })
      .min(3, { message: 'Country must be greater then 2 character' })
      .trim(),
  }),
  orders: z.optional(z.array(orderSchemaValidator)),
});
