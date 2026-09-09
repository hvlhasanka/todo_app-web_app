# TODO Web App - Server

## 1. Description

This is a Node.js Express backend created with TypeScript for the TODO Web App. It handles the RESTful API for managing TODOs and connects to a MongoDB database.

## 2. Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Docker](https://www.docker.com/) (optional, for local MongoDB setup)

## 3. Installation

Navigate to the `server` directory and install the dependencies:

```bash
cd Workspace/server
npm install
```

Set up your environment variables by copying the example file:

```bash
cp .env.example .env
```

### Database Setup (Docker Alternative)

To run MongoDB locally for development, make sure you have Docker installed and run:

```bash
docker-compose up -d
```

This will start a MongoDB container on port `27017` with the following credentials:
- **Username**: `root`
- **Password**: `todo_app123$`

To stop the database, run:

```bash
docker-compose down
```

### Start the Server

Once the database is ready, you can start the API server:

```bash
npm run dev
```

## 4. Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the application in development mode using `tsx watch`. The server will automatically restart whenever you modify any TypeScript files in the `src` directory.

### `npm run build`
Compiles the TypeScript source code into JavaScript and outputs it to the `dist` folder.

### `npm run start`
Starts the production server by executing the compiled JavaScript code from the `dist` directory. You must run `npm run build` before using this command.

### `npm run lint`
Runs ESLint to check for code quality and syntax issues.

### `npm run format`
Runs Prettier to automatically format your code according to the `.prettierrc` configuration.

## 5. Source Code Structure

<p align="center">
  <kbd>
    <img src="../../Documentation/todo-web-app_server-source-code.png" width="50%" />
  </kbd>
</p>
<p align="center">Figure 5.1: Source Code Structure</p>

The `src` directory contains the core application logic, structured as follows:

- **`index.ts`**: The main entry point of the server that initializes the Express application, applies middlewares, and registers routes.
- **`config/`**: Contains configuration files, such as the MongoDB connection setup.
- **`schemas/`**: Contains Zod validation schemas used to validate the structure and types of incoming request payloads.
- **`middlewares/`**: Contains custom Express middlewares, such as rate limiting, CORS configuration, and request data validation.
- **`routes/`**: Contains Express route definitions mapping endpoints to their respective controllers.
- **`controllers/`**: Contains the route handler functions that process incoming requests, interact with the database, and return responses.
- **`data/`**: Contains the database interaction functions.
- **`models/`**: Contains Mongoose schemas and models representing the database structure.

## 6. API Documentation

### Base API Path
`/api/todos`

### Endpoints

| Method   | Endpoint                | Description                                   |
| -------- | ----------------------- | --------------------------------------------- |
| `GET`    | `/health-check`         | Server health check.                          |
| `GET`    | `/api/todos`            | Fetch all TODO items.                         |
| `POST`   | `/api/todos`            | Create a new TODO item.                       |
| `PUT`    | `/api/todos/:id`        | Update an existing TODO item's details.            |
| `PATCH`  | `/api/todos/:id/done`   | Toggle a TODO item's done status.       |
| `DELETE` | `/api/todos/:id`        | Delete a TODO item.                           |
