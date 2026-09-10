
const express = require('express');
const app = express()
const PORT = 3000
const cors = require('cors')
const mongoose = require('mongoose')
const Test = require('./models/Test')

app.use(cors())
app.use(express.json())



app.post('/test/post-question', (req, res) => {
	console.log(req.body)
})


app.get('/test',async(req, res) => {
const data = await Test.find()
 res.json(data)
})

app.put('/test/edit/:id',async(req, res) => {
	const result = await Test.findByIdAndUpdate(req.params.id, req.body, {new: true})
	res.json(result)
	console.log('updated result')
})

app.delete('/test/delete/:id',async(req, res) => {
	await Test.findByIdAndDelete(req.params.id)
	res.json('deleted result')
})


mongoose.connect('mongodb+srv://andrewgolov90_db_user:WUAvIVNU7pGXI4Y9@sempdb.64bjbh5.mongodb.net/user_tests').then((res) => {
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`)
	})
})

//
