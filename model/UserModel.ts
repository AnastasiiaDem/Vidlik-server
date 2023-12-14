import mongoose, {Schema} from 'mongoose';

export {};

interface IUser {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tasks: Array<any>;
}

export const UserSchema = new Schema<IUser>({
  _id: Schema.Types.ObjectId,
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  tasks: {type: [], required: true}
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
