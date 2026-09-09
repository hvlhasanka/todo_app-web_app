# TODO Web App - Server

## Description

This is a Node.js Express backend created with TypeScript for the TODO Web App. It handles the RESTful API for managing TODOs and connects to a MongoDB database.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Docker](https://www.docker.com/) (optional, for local MongoDB setup)

## Installation

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

## Available Scripts

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

## API Documentation

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
