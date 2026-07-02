import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'firstName is required'],
    },
    lastName: {
      type: String,
      required: [true, 'lastName is required'],
    },
    address: {
      type: String,
      required: [true, 'address is required'],
    },
    city: {
      type: String,
      required: [true, 'city is required'],
    },
    state: {
      type: String,
      required: [true, 'state is required'],
    },
    zipCode: {
      type: String,
      required: [true, 'zipCode is required'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minlength: [6, 'password must be at least 6 characters long'],
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
