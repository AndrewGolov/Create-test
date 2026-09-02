const mongoose = require('mongoose')

const TestScheme = mongoose.Schema({
	question: {
		type: String,
		required: true,
	},
	answers: {
		type: Array,
		required: true,
	}
})

const Test = mongoose.model('test_1',TestScheme)

module.exports = Test
