const express = require('express');
const app = express();
const http = require('http').createServer(app);

const mongoose = require('mongoose')
const dbHandler = require("./model/handler")
const db = new dbHandler

const path = require('path');
const io = require('socket.io')(http, {
	cors: { origin: "*" }
});

const DBUrl = "mongodb://localhost:27017/hitch-teehee"
const port = 3000;
const router = express.Router();


function initGet(url,dir){
	router.get(url,(req, res) => {
		res.sendFile(path.join(__dirname,'../',dir));
	});
};

function init(){
	var url = ['login','home','chat']
	for(var x = 0; x < url.length; x++){
		initGet('/'+url[x],`public/${url[x]}.html`)
	};
};

app.post('/grab-messages',(req, res) => {
	req.on('data', async (data,err)=>{
		if(err) res.status(404).send({error: "invalid json"});
		req.body = JSON.parse(data);
		
		var message = [];
		if(req.body.thread != 'global' ){
			message = await db.findMessageFromThread(req.body.thread);
			console.log(message);
		}
		res.send(message);
	})
})


io.on('connection', (socket) => {
		socket.on('loadMessage',(thread)=>{
			var message = [];
			if(thread != 'global' ){
				message = db.findMessageFromThread(thread)
			}
			io.emit('loadMessage')
		})

		socket.on('message', (json) => {
				console.log(json);
				if(json.thread != "global"){
					db.saveMessage(json)
				}
				io.emit('message',{"timestamp":json.timestamp,"username":json.username,"message":json.message,"color":json.color,"thread":json.thread} );
        });
});


initGet('/','public/index.html');
init()

app.use(express.static('../public'));
app.use("/", router);


mongoose.connect(DBUrl, { useNewUrlParser: true, useUnifiedTopology: true})
	.then((result) => {http.listen(port, () => {console.log(`listening http://localhost:${port}`)})})
	.catch((err) => console.error(err));


