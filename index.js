import express from 'express'

const app = express()

app.get('/', (req, res) => {
	res.send('Hello world!')
})

const port = 4444

app.listen(port, err => {
	if (err) {
		console.log(err)
	}

	console.log(`Server is running on port ${port}`)
})
