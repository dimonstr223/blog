import express from 'express'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { registerValidation } from './validations/auth.js'

const app = express()

const password = '4qz3qWU4ky1DLtF3'
mongoose
	.set('strictQuery', false)
	.connect(
		`mongodb+srv://admin:${password}@cluster0.xygibto.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log('DB connected'))
	.catch(err => console.log(`DB error`, err))

app.use(express.json())

app.post('/auth/register', registerValidation, (req, res) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(400).json(errors.array())
	}

	res.json({
		success: true,
	})
})

const port = 4444

app.listen(port, err => {
	if (err) {
		console.log(err)
	}

	console.log(`Server is running on port ${port}`)
})
