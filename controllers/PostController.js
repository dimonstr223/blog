import PostModel from '../models/Post.js'

export const getAll = async (req, res) => {
	try {
		const posts = await PostModel.find().populate('user').exec()

		res.json(posts)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Getting posts error',
		})
	}
}
export const getOne = (req, res) => {
	try {
		const postId = req.params.id

		PostModel.findOneAndUpdate(
			{
				_id: postId,
			},
			{
				$inc: { viewCount: 1 },
			},
			{
				returnDocument: 'after',
			},
			(err, doc) => {
				if (err) {
					console.log(err)
					return res.status(500).json({
						message: 'Returning post error',
					})
				}
				if (!doc) {
					console.log(err)
					return res.status(404).json({
						message: 'Post not found',
					})
				}

				res.json(doc)
			}
		)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Getting post error',
		})
	}
}
export const create = async (req, res) => {
	try {
		const doc = new PostModel({
			title: req.body.title,
			text: req.body.text,
			tags: req.body.tags,
			imageUrl: req.body.imageUrl,
			user: req.userId,
		})

		const post = await doc.save()

		res.json(post)
	} catch (err) {
		console.log('err')
		res.status(500).json({
			message: 'Post creating error',
		})
	}
}
export const remove = (req, res) => {
	try {
		const postId = req.params.id

		PostModel.findOneAndDelete(
			{
				_id: postId,
			},
			(err, doc) => {
				console.log(err)
				if (err) {
					return res.status(500).json({
						message: 'Post deleting error',
					})
				}
				if (!doc) {
					console.log(err)
					return res.status(404).json({
						message: 'Post not found',
					})
				}

				res.json({ success: true })
			}
		)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Post deleting error',
		})
	}
}
export const update = async (req, res) => {
	try {
		const postId = req.params.id

		await PostModel.updateOne(
			{
				_id: postId,
			},
			{
				title: req.body.title,
				text: req.body.text,
				tags: req.body.tags,
				user: req.userId,
				imageUrl: req.body.imageUrl,
			}
		)
		res.json({ success: true })
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Post updating error',
		})
	}
}
export const getLastTags = async (req, res) => {
	try {
		const posts = await PostModel.find().limit(5).exec()
		const tags = posts
			.map(obj => obj.tags)
			.flat()
			.slice(0, 5)
		res.json(tags)
	} catch (err) {}
}
