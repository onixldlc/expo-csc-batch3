# hitch.teehee

![csc](CSC-Logo-kopong-400x400.png)
>by CSC

## Explanation

this project is an example to show what an attacker can do to an unsecure chat messaging app and what the defender can do to mitigate the attack

</br>
</br>

## Setup

</br>

1. Dependency

    install all the dependency used in this project by going to the backEnd folder and run

    ``` bash
    cd backend
    npm install
    ```

    </br>
2. Setup Domain

    if deployed locally, change the machine hosts file by using `` nano /etc/hosts `` and add the following line

    ```txt
    127.0.0.1  hitch.teehee
    127.0.0.1  chat.hitch.teehee
    ```

    if not find every hitch domain and replace it with the domain you prefer and currently are use

    </br>
3. Run DB Server

    to run the db,  run the script from the private folder directories with

    ```bash
    cd private
    ./start-DB-Server.sh
    ```

    </br>
4. Run Node Server

    run the node server by simply go to the backEnd folder and run `main.js`

    ```bash
    cd backend
    node main.js
    ```

    </br>
5. open it in browser

    assuming all the step above run with no error and you also deploy it locally, you can open the website now by using `hitch.teehee:3000` or `chat.hitch.teehee:3000`

    </br>

## Exploit and Defence

### Exploit

+ xss
</br>

### Defense

+ iframe
+ subdomain sanboxing
+ create fake xss
</br>
</br>

## Versions

</br>

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

&emsp;[npm](https://www.npmjs.com/) 7.20.5\
&emsp;[nodejs](https://nodejs.org/en/) 14.17.4\
&emsp;[express](https://www.npmjs.com/package/express) 4.17.1\
&emsp;[mongodb](https://www.npmjs.com/package/mongodb) 4.1.0\
&emsp;[mongoose](https://www.npmjs.com/package/mongoose) 5.13.5\
&emsp;[socket.io](https://www.npmjs.com/package/socket.io) 4.1.3

<!-- [npm](https://www.npmjs.com/) 7.20.5\
└─ [nodejs](https://nodejs.org/en/) 14.17.4\
&emsp;&emsp;├─  [express](https://www.npmjs.com/package/express) 4.17.1\
&emsp;&emsp;├─  [mongodb](https://www.npmjs.com/package/mongodb) 4.1.0\
&emsp;&emsp;├─  [mongoose](https://www.npmjs.com/package/mongoose) 5.13.5\
&emsp;&emsp;└─  [socket.io](https://www.npmjs.com/package/socket.io) 4.1.3 -->

</br></br></br></br></br></br>
> project EXPO csc batch 3
