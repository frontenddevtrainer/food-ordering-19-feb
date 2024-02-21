import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_on: { type: Date, default: new Date() },
  is_admin: { type: Boolean, default: false, required: true },
});

const UserModel = mongoose.models?.users || model("users", UserSchema, "users");

export { UserModel, UserSchema };
