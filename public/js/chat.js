const socket = io('ws://localhost:3000');


function createNewMessage(Username, Message, Timestamp, color){
	return `<div class="messages"><div class="timestamp">${Timestamp}</div><div class="username" style="color:${color};">${Username}</div><div class="divider">:</div><div class="message">${Message}</div></div>`;
	/*
	<div class="messages">
		<div class="timestamp">${Timestamp}</div>
		<div class="username">${Username}:</div>
		<div class="divider">:</div>
		<div class="message">${Message}</div>
	</div>
	*/
}

function addNewMessage(newMessage){
	document.getElementsByClassName("top-chat-content")[0].innerHTML += newMessage;
}

function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function createTimestamp(){
	var date = new Date;
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hour = date.getHours();
	return String(`${padLeadingZeros(hour, 2)}:${padLeadingZeros(minutes, 2)}:${padLeadingZeros(seconds, 2)}`);
}

function sendInput(username,color,thread){
	var messageDiv = document.getElementsByClassName("chatInput")[0].children[0];
	var message = messageDiv.value;
	if(username && message && color){
		socket.emit('message',{"timestamp":createTimestamp(),"username":username,"message":message,"color":color,"thread":thread});
		messageDiv.value = "";
	}
}

function init(){
	var cred = parseURLParams(String(window.location))
	var username = cred.username;
	var color = cred.color;
	var thread = cred.thread;

	fetch("http://chat.hitch.teehee:3000/grab-messages",{
		method: "POST",
		headers: {"Content-Type":"application/json"},
		body: JSON.stringify({"thread":thread}),
	})
	.then(response => response.json())
	.then(data => {
		data.forEach((json) => {
			addNewMessage(createNewMessage(json.username, json.message, json.timestamp, json.color))
		});
	})

	if(thread == undefined){
		thread = "global"
	}
	document.getElementsByClassName("chatContainer")[0].children[1].onclick=function(){sendInput(username,color,thread)};
	document.getElementsByTagName("title")[0].innerText = thread
}

socket.on('message', json => {
	if(json.thread == document.getElementsByTagName("title")[0].innerText){
		addNewMessage(createNewMessage(json.username, json.message, json.timestamp, json.color));
	}
});

function parseURLParams(url) {
	var queryStart = url.indexOf("?") + 1,
		queryEnd   = url.indexOf("#") + 1 || url.length + 1,
		query = url.slice(queryStart, queryEnd - 1),
		pairs = query.replace(/\+/g, " ").split("&"),
		parms = {}, i, n, v, nv;

	if (query === url || query === "") return;

	for (i = 0; i < pairs.length; i++) {
		nv = pairs[i].split("=", 2);
		n = decodeURIComponent(nv[0]);
		v = decodeURIComponent(nv[1]);

		if (!parms.hasOwnProperty(n)){
			parms[n]=v;
		}
	}
	return parms;
}

init();