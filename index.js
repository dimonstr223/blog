import express from 'express'
import mongoose from 'mongoose'

import { registerValidation } from './validations.js'
import checkAuth from './utils/checkAuth.js'
import * as UserController from './controllers/UserController.js'

const app = express()

const password = '4qz3qWU4ky1DLtF3'
mongoose
	.set('strictQuery', false)
	.connect(
		`mongodb+srv://admin:${password}@cluster0.xygibto.mongodb.net/Blog?retryWrites=true&w=majority`
	)
	.then(() => console.log('DB connected'))
	.catch(err => console.log(`DB error`, err))

app.use(express.json())

// ROUTES
app.post('/auth/login', UserController.login)
app.post('/auth/register', registerValidation, UserController.register)
app.get('/auth/me', checkAuth, UserController.getMe)

const port = 4444

app.listen(port, err => {
	if (err) {
		console.log(err)
	}

	console.log(`Server is running on port ${port}`)
})
