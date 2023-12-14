export {};
import mongoose, {Schema} from 'mongoose';

export enum statusEnum {
  Done = 'Done',
  Ongoing = 'Ongoing',
  Waiting = 'Waiting'
}

interface ITask {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  title: string;
  status: statusEnum;
  workMin: number;
  shortBreakMin: number;
  longBreakMin: number;
  rounds: number;
}

export const TaskSchema = new Schema<ITask>({
  _id: Schema.Types.ObjectId,
  userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  title: {type: String, required: true},
  status: {type: String, required: true},
  workMin: {type: Number, required: true},
  shortBreakMin: {type: Number, required: true},
  longBreakMin: {type: Number, required: true},
  rounds: {type: Number, required: true}
});

const Task = mongoose.model<ITask>('Task', TaskSchema);
export default Task;
