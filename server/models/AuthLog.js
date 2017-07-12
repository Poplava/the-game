import mongoose, { Schema } from 'mongoose';
import { UserScchema } from './User';

export const AuthLogSchema = new Schema({
  user: Schema.Types.ObjectId,
  date: Date
});

AuthLogSchema.statics.log = async function(user) {
  const log = new AuthLog({
    user,
    date: new Date()
  });

  return await log.save();
};

const AuthLog = mongoose.model('AuthLog', AuthLogSchema);

export default AuthLog;
