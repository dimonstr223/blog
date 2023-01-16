import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

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

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.post('/auth/login', (req, res) => {
	const token = jwt.sign(
		{
			email: req.body.email,
			fullName: 'Дима Пупкин',
		},
		'secret123'
	)

	res.json({
		success: true,
		token,
	})
})

const port = 4444

app.listen(port, err => {
	if (err) {
		console.log(err)
	}

	console.log(`Server is running on port ${port}`)
})
