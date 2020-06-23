# Scratch that!
This is a project for a simple to-do application, with client built in React and Redux and an express server.

## Client 
Front-end for this application uses React and Redux for state management. The interface is simple but has most of the functions.
1. User can switch between two dark or light theme.
2. Sign-up using email and password. (Mandatory for using the app)
3. Sign-in for returning users.
4. Create tasks.
5. Update tasks.
6. Delete tasks.
7. Sign-out.
The state of the application persists between sessions.

## Backend
Backend for this application is a simple express server utilizing an Sqlite3 database for data persistence.

### Supports the following routes:
#### Auth routes:
1. /api/user/signin
2. /api/user/signup

All user routes return a json web token which is expected to be in future requests' headers for authentication purposes.

#### Todo routes:
1. GET - /api/todo
2. POST - /api/todo (expects a task, e.g. {"task": "some task"})
3. PUT - /api/todo/:taskId (expects an updated task in body, e.g. {"task": "some task", "status": "done"})
4. DELETE - /api/todo/:taskId

All todo routes check the headers for Bearer token authorization.

## How to run the project
### Server
To run the backend of the application run the following commands:
```
cd ./Server
npm install
npm start
```
The server runs on http://localhost:3200/

### Client
To run the frontend of the application run the following commands:
```
cd ./Client
yarn install
yarn start
```
or use npm for installing the packages and npm run 

## Access the application on  http://localhost:3000/


