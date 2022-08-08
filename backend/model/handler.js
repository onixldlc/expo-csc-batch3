const Messages = require("./message");
const Users = require("./user")

class dbHandler{

	saveMessage(json){
		const message = new Messages({
			username: json.username,
			color: json.color,
			message: json.message,
			timestamp: json.timestamp,
			thread: json.thread,
		});
		message.save()
			.catch((err)=>{
				console.error(err);
			});
	}

	saveUser(json){
		const user = new Users({
			username: json.username,
			password: json.password,
			color: json.color,
			threads: []
		});
		user.save()
			.catch((err)=>{
				console.error(err);
			});
		}





	async findMessageFromThread(thread){
		var messages = await Messages.find({"thread":thread},function(err ,messages){
			// console.log(messages)
			return messages
		})
		// Messages.find({"thread":thread},function(err ,messages){
		// 	messages.forEach(function(msg){
		// 		messageList.push(msg);
		// 	});
			// console.log(messages);
		// })
		.catch((err)=>{
			console.error(err);
		});
		return messages;
	}

	async findUserFromUsers(username){
		var user = await Users.find({"username":username},function(err, user){
			return user;
		})
		.catch((err)=>{
			console.error(err);
		});
		return user;
	}


	
	async checkIfUserExist(username){
		var user = await Users.find({"username":username},function(err, user){
			return user;
		})
		.catch((err)=>{
			console.error(err);
		});
		return user;
	}

}

module.exports = dbHandler