export {};
import mongoose, {Schema} from 'mongoose';

interface ITask {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  workMin: number;
  shortBreakMin: number;
  longBreakMin: number;
}

export const TaskSchema = new Schema<ITask>({
  _id: Schema.Types.ObjectId,
  userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  workMin: {type: Number, required: true},
  shortBreakMin: {type: Number, required: true},
  longBreakMin: {type: Number, required: true}
});

const Task = mongoose.model<ITask>('Task', TaskSchema);
export default Task;
