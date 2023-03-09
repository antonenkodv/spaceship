import { env } from 'process';
import * as dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  MONGO_DB: {
    URL: env.MONGO_DB_URL,
  },
};
