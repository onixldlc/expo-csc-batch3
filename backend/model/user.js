const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	password: String,
	color: String,
	thread: [String],
},{ collection: "users" })

const Users = mongoose.model('Users', userSchema)
module.exports = Users;