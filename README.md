# expo-csc-batch2

## explanation
this project is an example to show what an attacker can do to an unsecure chat messaging app and what the defender can do to mitigate the attack
<br></br>

------------------
## setup

1. Dependency

install all the dependency used in this project by going to the backEnd folder and run

	npm install

2. Setup Domain

if deployed locally, change the machine hosts file by using `` nano /etc/hosts `` and add the following line

	127.0.0.1	hitch.teehee
	127.0.0.1	chat.hitch.teehee

if not find every hitch domain and replace it with the domain you prefer and currently are use

3. Run DB Server

to run the db,  run the script from the private folder directories with

	cd private
	./start-DB-Server.sh

4. Run Node Server
   
run the node server by simply go to the backEnd folder and run `main.js`

	cd backend
	node main.js


------------------
## versions
<!-- ```
npm			7.20.5
nodejs		14.17.4

express		4.17.1
mongodb		4.1.0
mongoose	5.13.5
socket.io	4.1.3
``` -->

<!-- ```nodejs	14.17.4```\
```npm	7.20.5```\
```├─ express	4.17.1```\
```├─ mongodb	4.1.0```\
```├─ mongoose	5.13.5```\
```└─ socket.io	4.1.3``` -->

`npm	7.20.5`\
`└─ nodejs	14.17.4`\
&emsp;&emsp;`├─ express	4.17.1`\
&emsp;&emsp;`├─ mongodb	4.1.0`\
&emsp;&emsp;`├─ mongoose	5.13.5`\
&emsp;&emsp;`└─ socket.io	4.1.3`
