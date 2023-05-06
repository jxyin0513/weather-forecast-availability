# weather-forecast-availability

This is weather forecast app that take city as input and shows its weather.

# Dependencies

In the `backend` folder, initialize the server's `package.json` by running
`npm init -y`.

`npm install` the following packages as dependencies:

- `bcryptjs` - password hashing
- `cookie-parser` - parsing cookies from requests
- `cors` - CORS
- `csurf` - CSRF protection
- `dotenv` - load environment variables into Node.js from a `.env` file
- `express` - Express
- `express-async-handler` - handling `async` route handlers
- `express-validator` - validation of request bodies
- `faker` - random seeding library
- `helmet` - security middleware
- `jsonwebtoken` - JWT
- `morgan` - logging information about server requests/responses
- `per-env` - use environment variables for starting app differently
- `pg@">=8.4.1"` - PostgresQL greater or equal to version 8.4.1
- `sequelize@5` - Sequelize
- `sequelize-cli@5` - use `sequelize` in the command line

`npm install -D` the following packages as dev-dependencies:

- `dotenv-cli` - use `dotenv` in the command line
- `nodemon` - hot reload server `backend` files

# Dependencies

In the `frontend` folder, `npm install` the following packages as dependencies:

- `js-cookie` - extracts cookies
- `react-redux` - React components and hooks for Redux
- `react-router-dom` - routing for React
- `redux` - Redux
- `redux-thunk` - add Redux thunk

`npm install -D` the following packages as dev-dependencies:

- `redux-logger` - log Redux actions in the browser's dev tools console

# Configuration

In the `backend` folder, create a `.env` file that will be used to define your
environment variables.

Populate the `.env` file based on the example below:

```plaintext
PORT=5001
DB_USERNAME=auth_app
DB_PASSWORD=«auth_app user password»
DB_DATABASE=auth_db
DB_HOST=localhost
JWT_SECRET=«generate_strong_secret_here»
JWT_EXPIRES_IN=604800
```
# Errors

For local databases, I only added sample city data for one city only. Please add more sample in database to test more cases.
For some codes, I did it for the special case, and not a correct way.
