import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  projects: string[];
  chats: string[];
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  projects: { type: [String], default: [] },
  chats: { type: [String], default: [] },
});

export default mongoose.model<IUser>("User", UserSchema);
