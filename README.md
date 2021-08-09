<h1> hitch.teehee </h1>


<h2> Explanation </h2>
this project is an example to show what an attacker can do to an unsecure chat messaging app and what the defender can do to mitigate the attack


<br></br>

------------------
<h2>Setup</h2>
<br><br>

1. Dependency

install all the dependency used in this project by going to the backEnd folder and run

	cd backend
	npm install
<br><br>

2. Setup Domain

if deployed locally, change the machine hosts file by using `` nano /etc/hosts `` and add the following line

	127.0.0.1	hitch.teehee
	127.0.0.1	chat.hitch.teehee

if not find every hitch domain and replace it with the domain you prefer and currently are use

<br><br>

3. Run DB Server

to run the db,  run the script from the private folder directories with

	cd private
	./start-DB-Server.sh
<br><br>

4. Run Node Server
   
run the node server by simply go to the backEnd folder and run `main.js`

	cd backend
	node main.js
<br><br>

5. open it in browser

assuming all the step above run with no error and you also deploy it locally, you can open the website now by using `hitch.teehee:3000` or `chat.hitch.teehee:3000`

<br><br>


------------------
<h2>Exploit and Defence</h2>
<h3>exploit</h3>

+ xss
+ csrf
+ noSQLI

<br>

<h3>defence</h3>

+ iframe
+ subdomain sanboxing
+ create fake xss

------------------
<h2>Versions</h2>

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

npm	7.20.5\
└─ nodejs	14.17.4\
&emsp;&emsp;├─  <a href="https://www.npmjs.com/package/express">express</a>	4.17.1\
&emsp;&emsp;├─  <a href="https://www.npmjs.com/package/mongodb">mongodb</a>	4.1.0\
&emsp;&emsp;├─  <a href="https://www.npmjs.com/package/mongoose">mongoose</a>	5.13.5\
&emsp;&emsp;└─  <a href="https://www.npmjs.com/package/socket.io">socket.io</a>	4.1.3

<br></br><br></br><br></br>
<p style="color: grey;margin-top:10px">project EXPO csc batch 3<p>