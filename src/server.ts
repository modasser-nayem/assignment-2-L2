import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose
      .connect(config.DB_URL as string)
      .then(() => {
        // eslint-disable-next-line
        console.log(`DB IS CONNECT ON ${mongoose.connection.host}`);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log('Mongodb connection Failed!. Error:', err.stack);
      });
    app.listen(config.PORT, () => {
      // eslint-disable-next-line
      console.log(`SERVER IS RUNNING AT http://localhost:${config.PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line
    throw new Error('Internal Server Error!');
  }
}

main();
