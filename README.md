# My Wallet API

## 🔍 About

<p>
  This is the back-end repository of My Wallet, a web application that helps you control your daily expenses
</p>

<br>

## 🏛️ Front-end repository

<p align="center"><a href="https://github.com/victordurco/my-wallet" target='_blank'>My Wallet APP</a></p>

<br>

## 🛰️ Deployment

<p align="center"><a href="https://my-wallet-pi.vercel.app/" target='_blank'>My Wallet</a></p>

<br>

## 🚂 How to run

### Pre-requisites: <a style='color:inherit' href="https://git-scm.com">Git</a> and <a style='color:inherit' href="https://nodejs.org/en/">Node.js</a>

<br>

```bash
# Clone this repository
$ git clone <https://github.com/victordurco/api-my-wallet>

# Access the project folder cmd/terminal
$ cd my-wallet-api

# Install the dependencies
$ npm install

# Create a dev postgres database using the dump.sql file (the following command can be used in the postgres terminal if you are using ubuntu and put the dump.sql file in the /tmp folder)
pg_dump your_database_name < /tmp/dump.sql


# Create a file of environment variables at the root of the project
$ touch .env.dev

# Set the database port and link as environment variable according to the ".env.example" file

# Run the app
$ npm run start:dev

# The server will automatically start on your localhost

# Run the tests
$ npm run test
```

<br>

## 📜 Documentation

### `POST /sign-up`

#### Request

    body: {
        "name": "Marina",
        "email": "marinasena@gmail.com",
        "password": "De1primeira!",
    }

#### Response

    in case of invalid params: status 400

    in case e-mail already exists: status 409

    in case of success: status 201

### `POST /sign-in`

#### Request

    body: {
        email: marinasena@gmail.com,
        password: De1primeira!
    }

#### Response

    in case of invalid params: status 400

    in case of incorrect e-mail and/or password: 401

    in case of unregistered email: 404

    in case of success: status 200

        data: {
            "name": "Marina",
            "token": "ad52a74s3f54a32d",
        }

### `POST /sign-out`

#### Request

    headers: {
      Authorization: Bearer token
    }

    body: {}

#### Response

    in case of success: status 200

### `GET /registers`

#### Request

    headers: {
      Authorization: Bearer token,
    }

#### Response

    in case of unauthorized session: 401

    in case of success: status 200
        body: {
            [array of registers]
        }

### `POST /registers`

#### Request

    headers: {
      Authorization: Bearer token,
    }

    body: {
        value: 500000, //in cents
        description: "salario",
        type: 1 //only accepts 1 (for Entry) or 2 (for Exit)
    }

#### Response

    in case of unauthorized session: 401

    in case of invalid body: status 400

    in case of success: status 201

### `POST /registers/delete`

#### Request

    headers: {
      Authorization: Bearer token,
    }

    body: {
        id: 52 //id of the register tha must be deleted
    }

#### Response

     in case of success: status 204

<br>

## 🧮 Tech Stack

<p align="center">
    <img alt="javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img alt="postgres" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img alt="nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
<img alt="jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
<img alt="expressjs" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img alt="heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>

</p>

<br>

---
