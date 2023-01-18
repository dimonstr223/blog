import { body } from 'express-validator'

export const registerValidation = [
	body('email', 'Incorrect email').isEmail(),
	body('password', 'Password must contain at least 5 symbols').isLength({
		min: 5,
	}),
	body('fullName', 'Incorrect Username').isLength({ min: 3 }),
	body('avatarUrl', 'Incorrect value').optional().isURL(),
]

export const loginValidation = [
	body('email', 'Incorrct email').isEmail(),
	body('password', 'Password must contain at least 5 symbols').isLength({
		min: 5,
	}),
]

export const postCreateValidation = [
	body('title', 'Enter a title of post').isLength({ min: 3 }).isString(),
	body('text', 'Enter a text of post').isLength({ min: 3 }).isString(),
	body('tags', 'Incorrect format of tag (need to be a string')
		.optional()
		.isString(),
	body('imageUrl', 'Incorrect image link').optional().isString(),
]
