const express = require('express');
const path = require('path');
const io = require('socket.io')(http, {
	cors: { origin: "*" }
});

const app = express();
const port = 8080;
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

io.on('connection', (socket) => {
        console.log('user: bla connected');

        socket.on('message', (message) => {
                console.log(message);
                io.emit('message',`${user} said ${message}` );
        });
});


initGet('/','public/index.html');
init()



app.use(express.static('../public'));

/*
app.get('/home', (req, res) => {
	res.send('Hello World!');
});
*/

app.use("/", router);

app.listen(port, () => {
	console.log(`listening http://localhost:${port}`);
});
