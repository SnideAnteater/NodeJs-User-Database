# NodeJs-User-Database
 A NodeJs application with express and typescript to Register, Login, Authenticate, Update and Delete data's from a MongoDB Database table

[![Node.js](https://img.shields.io/badge/Node.js-v16.0.0-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v4.0.0-blue.svg)](https://www.typescriptlang.org/)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16.x.x or later)
- **npm** (v7.x.x or later) or **yarn** (v1.x.x or later)
- **MongoDB** (if using MongoDB as the database)

## Installation

1. **Clone the repository:**
   
2. **Install dependencies:**

   ```Using npm
   npm install
   ```
   
   ```Using yarn
   yarn install
   ```
   
## Environment Variables

Create a `.env` file in the root of your project and configure the following environment variables:

```plaintext
MONGODB_URI=mongodb://username:password@host:port/database
PORT=8080
JWT_SECRET=your_secret_key
```
- `MONGODB_URI`: Your MongoDB connection string.
- `PORT`: The port number on which your application will run (default: `8080`).
- `JWT_SECRET`: A secret key used for signing JWT tokens.

## Running the Application

To start the application in development mode:

```bash
npm start
```

Or if you're using yarn:

```bash
yarn start
```

This will start the server with hot-reloading enabled.
