import mongoose from 'mongoose';

import { MONGO_URL } from '../config';

mongoose.Promise = Promise;

export default function() {
  mongoose.connect(MONGO_URL);
};
