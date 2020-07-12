<h3>Steps for running The Demo</h3>

i. Ensure Typescript & Nodemon are <strong>globally</strong> installed
```
$ sudo npm install -g typescript && sudo npm install -g nodemon
```

-- These could have been added as Dev Dependencies as well, but since it is a demo I did not.

ii. Create ENV file and Provide Values in ENV file
```
$ yarn setup-env
```

iii. Install Packages
```
$ yarn install
```

iv. Build from Source
```
$ yarn build
```

v. Start App
```
$ yarn start
```

------------------------------
- Products (GET)

Endpoint (Try without providing token in headers)
<em> You </em>
```
http://127.0.0.1:5000/api/v1/products
```

-------------------------
- User Signup (POST)

Endpoint
```
http://127.0.0.1:5000/api/v1/users/signup
```

Req Body (JSON)
```
{
	"email" : "something",
	"password" : "something",
	"fullname" : "something"
}
```
-----------------------
- User Login (POST)

Endpoint
```
http://127.0.0.1:5000/api/v1/users/login
```

Req Body (JSON)
```
{
	"email" : "something",
	"password" : "something"
}
```
<strong>You will get Token after successful authentication</strong>

------------------------

- Products (GET)

i. Provide token in headers, the token you get after logging in
ii. Provide as follows
```
Authorization : Bearer <TOKEN>
```

Endpoint 
```
http://127.0.0.1:5000/api/v1/products
```

------------------------