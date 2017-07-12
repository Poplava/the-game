import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
  id: String,
  displayName: String,
  email: String,
  profileUrl: String,
  photo: String
});

UserSchema.statics.retrieveProfile = async function(profile) {
  let user = await this.findOne({ id: profile.id }).exec();

  if (!user) {
    user = new User({
      id: profile.id
    });
  }

  user.displayName = profile.displayName;
  user.email = profile.emails && profile.emails.length ? profile.emails[0].value : null;
  user.profileUrl = profile.profileUrl;
  user.photo = profile.photos && profile.photos.length ? profile.photos[0].value : null;

  return await user.save();
};

UserSchema.statics.serialize = function(user, done) {
  done(null, user._id);
};

UserSchema.statics.deserialize = function(id, done) {
  this.findById(id, done);
};

const User = mongoose.model('User', UserSchema);

export default User;
