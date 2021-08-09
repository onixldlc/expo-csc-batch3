const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const threadsSchema = new Schema({
	thread: String,
	description: String,
	threadId: String,
},{ collection: "threads" })

const Thread = mongoose.model('Thread', threadsSchema)
module.exports = Thread;





















// const url = 'mongodb://localhost:27017/hitch.teehee'
// mongoose.connect(url, { userNewUrlParser: true, useUnifiedTopology: true})
	// .then((result) => console.log('connection successful'))
	// .catch((err) => console.error(err));































/*
function dbFileHandler(){
	function read(dir){
		return fs.readFileSync('../private/'+dir,{encoding:'utf-8',flag:'r'});
	}
	function write(dir, data){
		fs.writeFileSync('../private/'+dir, data, {encoding:'utf-8',flag:'w'});
	}
}

function dataCreationHandler(){
	function newUser(username,password,color,threadList){
		var temp = `"${username}":{
			"password":"${password}",
			"color":"${color}",
			"threads":"[${threadList}]"
			},`
		return temp
	}
}

function dbHandler(){
	const file = new dbFileHandler;
	const create = new dataCreationHandler;

	function createNewData(){
		
	}

	function updateDB(db,data){
		var oldData = file.read(db)

	}

}

*/