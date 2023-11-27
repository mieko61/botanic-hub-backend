# BOTANIC HUB - back end

This is the server side of Botanic Hub, which handles different functions like user authentication and interacting with the database.

## Features

- User authentication: User sign up and log in are handled on this application using jwt.
- Favorites: The plants saved to the user's tab is saved in a database and can be accessed through an endpoint.

## Tech Stack

- Node.js
- Express
- JWT
- Bcrypt
- Knex
- Mysql

## Installation

1. Clone the repository:
   https://github.com/mieko61/mieko-tominaga-capstone-server.git

2. Install dependencies:

```bash
  npm i
```

3. Run the server:

```bash
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`CORS_ORIGIN`

`DB_HOST`

`DB_NAME`

`DB_USER`

`DB_PASSWORD`

`JWT_KEY`

## Endpoints

- GET/categories Get all health categories
- GET/healthUse?category=?? Get all health subcategories
- GET/results?healthUse=??&category=?? Get all plants from a subcategory
- GET/plantdetails?plant=?? Get specific plant profile
- POST/register Register a new user
- POST/login Authenticate a user
- GET/favorites?userId=?? Get all favorite plants from a specific user
- POST/favorites?plantId=??&userId=?? Add a plant to a user's Favorites tab
- DELETE/favorites?plantId=??&userId=?? Remove a plant from a user's Favorites tab

## Database

The application uses MySQL as the database to store plant information, user information, favorite plants saved, and other relevant data.

https://www.mysql.com/
