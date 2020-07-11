import { model, Document } from 'mongoose';
import { userSchema } from '../schema/user';
import { ModelNames } from '../constants/'

interface IFC_User extends Document { }

export const User = model<IFC_User>(ModelNames.User, userSchema);