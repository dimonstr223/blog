import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()

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
