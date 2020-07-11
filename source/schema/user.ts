import { Schema } from 'mongoose';
import { collectionNames } from '../constants';

const userSchemaOpts = {
	fullname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	token: {
		type: String,
		required: true,
		unique: true,
	},
	status: {
		active: {
			type: Boolean,
			default: true
		},
		archive: {
			type: Boolean,
			default: false
		}
	}
};


const collectionOpts = {
	collection: collectionNames.user,
	timestamps: {
		createdAt: "created_at",
		updatedAt: "updated_at"
      }
};


export const userSchema = new Schema(userSchemaOpts, collectionOpts);