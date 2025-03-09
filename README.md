### Test Project - NuneGal Technical Test

This project is an online mobile product store. It consists of a frontend in Vue.js and a backend in Node.js with an SQLite database.

### Prerequisites

To run this project, you need to have the following tools installed:

- Node.js (Recommended: latest stable version)
- npm (Recommended: latest stable version)
- SQLite (For managing the database)

You can download and install the following tools from the links below:

- [Node.js](https://nodejs.org/)
- [SQLite](https://www.sqlite.org/download.html)

### Installation and Running

#### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the backend dependencies:

   ```bash
   npm install
   ```

3. Run the backend server:
   ```bash
   node server.js
   ```
   This will start the Node.js server, which will be available at port 5000 (`http://localhost:5000`).

#### Frontend

1. Navigate to the `frontend` directory in another terminal:

   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   ```

3. Run the frontend development server:
   ```bash
   npm run serve
   ```
   This will start the Vue.js development server on the default port 8080 (`http://localhost:8080`).

### 3. Additional Notes

- The database is managed using SQLite and is configured in the `backend/database` directory.
- Make sure Node.js, npm, and SQLite are properly set up and working on your system.
- The backend and frontend should be run in separate terminals since each one runs on a different port.

### 4. Final Checks

If you encounter issues with dependencies or installation, make sure to:

- Verify that Node.js and npm are properly installed by running the following commands:

  ```bash
  node -v
  npm -v
  ```

  This should return the versions of Node.js and npm.

- If you face issues with the database, make sure **SQLite** is correctly installed and accessible.
