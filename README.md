# Classroom

WIP dashboard for Mr. Monty's classes. This app is designed to be deployed to Heroku and work with Heroku's postgresql service.

## Prerequisites

- Node.js and npm (Node Package Manager)

## Setup and Running the Application

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/max-monty/web-app.git
cd web-app
npm install
```

Start the project (frontend and backend):

```bash
npm start dev
```

Start just the server:

```bash
npm start server
```

The server will start on http://localhost:3001
The React application will run on http://localhost:3000

### Accessing the Application

Open your browser and go to http://localhost:3000 to view and interact with the React frontend.

### Setting up the database

1. Create an app on Heroku
2. Connect app to Heroku postgresql
3. create a ```.env``` file ```DATABASE_URL: xxxxx```. Get credential from Heroku (use these credentials to connect to database management tool e.g. pgAdmin)