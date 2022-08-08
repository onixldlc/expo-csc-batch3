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

function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function createTimestamp(){
	var date = new Date;
	var minutes = date.getMinutes();
	var hour = date.getHours();
	return String(`${padLeadingZeros(hour, 2)}:${padLeadingZeros(minutes, 2)}`);
}














app.post('/grab-messages',(req, res) => {
	req.on('data', async (data,err)=>{
		if(err) res.status(404).send({error: "invalid json"});
		req.body = JSON.parse(data);
		
		var message = [];
		if(req.body.thread != 'global' ){
			message = await db.findMessageFromThread(req.body.thread);
			// console.log(message);
		}
		res.send(message);
	})
})

/*
app.post('/login',(req, res) => {
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
*/

app.post('/register',(req, res) => {
	req.on('data', async (data,err)=>{
		if(err) res.status(404).send({error: "invalid json"});
			req.body = JSON.parse(data);
		
		var user = [];
		if(req.body != undefined ){
			user = db.saveUser(req.body);
			console.log({"status":"success"});
			res.send({"status":"success"});
		}
		else{
			res.send({"status":"failed"});
		}
	})
})

app.post('/check-if-user-exist',(req, res) => {
	req.on('data', async (data,err)=>{
		if(err) res.status(404).send({error: "invalid json"});
			req.body = JSON.parse(data);
		
		var usernameCheck;
		if(req.body != undefined ){
			usernameCheck = await db.checkIfUserExist(req.body.username);
			// console.log({"status":"success"}, String(usernameCheck), usernameCheck, usernameCheck == "");
			if(usernameCheck == ""){
				res.send({"status":"success"});
				// res.send(usernameCheck);
			}
			else{
				res.send({"status":"failed"});
			}
		}
		else{
			res.send({"status":"failed"});
		}
	})
})

app.post('/auth',(req, res) => {
	req.on('data', async (data,err)=>{
		if(err) res.status(404).send({error: "invalid json"});
			req.body = JSON.parse(data);
		
		var usernameCheck;
		if(req.body != undefined){
			usernameCheck = (await db.checkIfUserExist(req.body.username))[0];
			console.log(usernameCheck, req.body)
			if(usernameCheck == undefined){
				res.send({"status":"failed"});
				console.log("username was undefined")	
			}
			else{
				console.log("login process")
				if(req.body.password == usernameCheck.password){
					res.send({"status":"success", "color":usernameCheck.color});
				}else{
					res.send({"status":"failed"});
				}
			}
		}
		else{
			console.log("there was an error in the body")
			res.send({"status":"failed"});
		}
	})
})

app.post('/send',(req, res) =>{
	req.on('data', async (data,err)=>{
		if(err) res.status(404).send({error: "invalid json"});
			json = JSON.parse(data);
			var subdom = req.subdomains; 
		if(json != undefined && subdom.includes("api")){
			io.emit('message',{"timestamp":createTimestamp(),"username":json.username,"message":json.message,"color":json.color,"thread":json.thread} );
			res.send({"status":"success"});
		}
		else{
			res.send({"status":"failed"});
		}
	})
})














io.on('connection', (socket) => {
		socket.on('loadMessage',(thread)=>{
			var message = [];
			if(thread != 'global'){
				message = db.findMessageFromThread(thread)
			}
			io.emit('loadMessage')
		})

		socket.on('message', (json) => {
				// console.log(json);
				if(json.thread != "global" && json.thread != 'Global' ){
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


