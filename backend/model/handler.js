const Messages = require("./message");

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
			console.error(err)
		});
		return messages
	}
}

module.exports = dbHandler