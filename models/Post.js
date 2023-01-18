import mongoose from 'mongoose'

export const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		text: {
			type: String,
			require: true,
			unique: true,
		},
		tags: {
			type: Array,
			default: [],
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			require: true,
		},
		viewCount: {
			type: Number,
			default: 0,
		},
		imageUrl: String,
	},
	{ timestamps: true }
)
