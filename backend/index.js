
const express = require('express');
const app = express()
const PORT = 3000
const cors = require('cors')
const mongoose = require('mongoose')
const Test = require('./models/Test')


app.use(express.urlencoded({
	extended: true
}))
app.use(cors())
app.use(express.json())

app.get('/test',async(req, res) => {
const data = await Test.find()
 res.json(data)
})



mongoose.connect('mongodb+srv://andrewgolov90_db_user:WUAvIVNU7pGXI4Y9@sempdb.64bjbh5.mongodb.net/user_tests').then((res) => {
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`)
	})
})

//
