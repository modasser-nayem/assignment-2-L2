# assignment-2-L2

### Live API Link: [https://assignment-2-l2.vercel.app/](https://assignment-2-l2.vercel.app/)

<br/>
<!-- ABOUT THE PROJECT -->

## API Endpoints

-  **POST**: `/api/users` - Create new user
-  **GET**: `/api/users` - Find all users
-  **GET**: `/api/users/1` - Find a single user
-  **PUT**: `/api/users/2` - Update a single user
-  **DELETE**: `/api/users/3` - Delete a single user
-  **POST**: `/api/users/7/orders` - Create new orders
-  **GET**: `/api/users/3/orders` - Find all orders for a single user
-  **GET**: `/api/users/5/orders/total-price` - Find a total order price for a single user

## Getting Started

### 1. Clone the repository:

```
git clone https://github.com/modasser-nayem/assignment-2-L2.git

cd assignment-2-L2
```

### 2. Install Dependencies:

```
npm install
```

### 3. Set Environment Variables:

Create a `.env` file in the root directory and define the required environment variables. include necessary variables `DB_URL`, `PORT`, `BCRYPT_SALT_ROUNDS`.

```
PORT=5000

DB_URL=mongodb://localhost:27017/your-database/your-database

BCRYPT_SALT_ROUNDS=12 // It's sample, you can add any number
```

### 4. Run the Application:

-  For development:

```
npm run dev
```

-  For production:

```
npm start
```

## Scripts

-  `npm run dev`: Start the application in development mode using `ts-node-dev`.
-  `npm start`: Start the application in production mode using the compiled `server.js` file.
-  `npm run build`: Compile TypeScript files using `tsc`.
-  `npm run lint`: Run ESLint to lint TypeScript files.
-  `npm run lint:fix`: Run ESLint with the `--fix` option to automatically fix linting issues.
-  `npm run prettier`: Run Prettier to format code.
-  `npm run prettier:fix`: Run Prettier with the `--write` option to automatically fix formatting issues.

## Built With

-  Typescript
-  Express
-  Mongodb
-  Node js

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-  Mongoose
-  Bcrypt
-  Zod

<!-- CONTACT -->

## Contact

Ali Modasser Nayem - [Linkedin](https://www.linkedin.com/in/alimodassernayem/) - mdalimodassernayem@gimail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
