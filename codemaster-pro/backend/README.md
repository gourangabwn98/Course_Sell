# CodeMaster Pro Backend Documentation

## Overview
CodeMaster Pro is a full-stack application built using the MERN stack (MongoDB, Express, React, Node.js). This document provides instructions for setting up and running the backend of the application.

## Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/codemaster-pro.git
   ```
2. Navigate to the backend directory:
   ```
   cd codemaster-pro/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration
Before running the application, ensure that your MongoDB connection string is correctly set in the `backend/src/config/db.js` file.

## Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints
### Users
- **GET /api/users**: Retrieve a list of users.
- **POST /api/users**: Create a new user.

## Testing
You can run tests using:
```
npm test
```

## License
This project is licensed under the MIT License.