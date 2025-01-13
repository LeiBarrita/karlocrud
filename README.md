# PERN Stack Project

## Overview

This project is built using the **PERN Stack**, which stands for:

- **PostgreSQL 17.2**: A powerful relational database management system.
- **Express.js 4.21.2**: A minimal and flexible Node.js web application framework.
- **React.js 18.3.1**: A popular JavaScript library for building user interfaces.
- **Node.js 23.6.0**: A JavaScript runtime for building server-side applications.

The project provides a full-stack web application, where React handles the front end, Express and Node.js manage the server-side logic, and PostgreSQL serves as the database.

## Features

- **RESTful API**: Backend API to handle CRUD operations.
- **User Authentication**: Login and registration with JWT tokens.
- **Database Interaction**: Stored data in PostgreSQL with efficient queries.
- **Responsive UI**: Frontend built with React that communicates with the backend.

## Technologies Used

- PostgreSQL
- Node.js
- Express.js
- React.js
- JWT for authentication
- Axios for API requests

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LeiBarrita/karlocrud.git
   ```

2. Set up the PostgreSQL database:

   - Create a `.env` file with the database credentials:
     ```
     DB_NAME=your_database_name
     DB_USER=your_database_user
     DB_PASSWORD=your_database_password
     DB_HOST=localhost
     DB_DIALECT=postgres
     DB_PORT=5432
     ```

3. Install backend dependencies:

   ```bash
   cd backend
   npm install
   npm run migrate
   npm run seed
   ```

4. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

The app will be available at `http://localhost:5173` (client) and `http://localhost:5000` (server).

## Demo Users

To make it easier to interact with the app during development or testing, the following demo users have been seeded into the database:

- **Mario**

  - Username: mario
  - Email: mario@mail.com
  - Password: mario1234
  - Role: User

- **Selena**

  - Username: selena
  - Email: selena@mail.com
  - Password: selena1234
  - Role: User

- **Roy**

  - Username: roy
  - Email: roy@mail.com
  - Password: roy1234
  - Role: User

- **Helena**

  - Username: helena
  - Email: helena@mail.com
  - Password: helena1234
  - Role: User

- **Marco**

  - Username: marco
  - Email: marco@mail.com
  - Password: marco1234
  - Role: Admin

- **Miriam**

  - Username: miriam
  - Email: miriam@mail.com
  - Password: miriam1234
  - Role: Admin

- **Mely**

  - Username: mely
  - Email: mely@mail.com
  - Password: mely1234
  - Role: Admin

- **Sally**
  - Username: sally
  - Email: sally@mail.com
  - Password: sally1234
  - Role: Admin

These users are created via a database migration script, which can be run using Sequelize to seed the `Users` table.
