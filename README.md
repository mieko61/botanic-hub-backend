# BOTANIC HUB 🌿 - server

This is the server side of Botanic Hub, which handles different functions like user authentication and interacting with the MySQL database.

## Client

https://github.com/mieko61/mieko-tominaga-capstone-client.git

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Endpoints](#endpoints)
- [Database](#database)

## Features

- **User authentication:** User sign up and log in are handled on this application using jwt.
- **Favorites:** Once logged in, users can save/remove plants from their 'Favorites' page. This information gets updated in the database and can be accessed through an endpoint.

## Tech Stack

- Node.js
- Express
- JWT
- Bcrypt
- Knex.js
- MySQL
- Cors

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/mieko61/mieko-tominaga-capstone-server.git
```

2. Install dependencies:

```bash
  npm i
```

3. Set up your MqSQL database, server, and client configurations in a `.env` file.

```bash
PORT=
CORS_ORIGIN=
API_URL=
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_KEY=
```

4. Create your database:

Create a MySQL database called BotanicHub, which is the name specified in the `.env` file.

5. Run migrations:

```bash
  npm run migrate
```

6. Run seeding:

```bash
  npm run seed
```

7. Run the server:

```bash
  npm start
```

## Endpoints

- **GET/categories** Get all health categories
- **GET/healthUse?category=??** Get all health subcategories
- **GET/results?healthUse=??&category=??** Get all plants from a subcategory
- **GET/plantdetails?plant=??** Get specific plant profile
- **POST/register** Register a new user
- **POST/login** Authenticate a user
- **GET/favorites?userId=??** Get all favorite plants from a specific user
- **POST/favorites?plantId=??&userId=??** Add a plant to a user's Favorites tab
- **DELETE/favorites?plantId=??&userId=??** Remove a plant from a user's Favorites tab

## Database

The app uses MySQL as the database to store plant information, user information, favorite plants saved, and other relevant data.

![database tables](/assets/images/tables.png)
