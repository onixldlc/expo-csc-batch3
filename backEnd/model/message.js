const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	username: String,
	color: String,
	message: String,
	timestamp: String,
	thread: String
},{ collection: "messages" });

const Message = mongoose.model('Message', messageSchema)
module.exports = Message;

