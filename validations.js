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
