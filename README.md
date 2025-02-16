# Node.js Express Login and Registration example with MongoDB and JWT

- Appropriate Flow for User Login and Registration with JWT and Cookies
- Node.js Express Architecture with CORS, Authentication & Authorization middlewares & Sequelize
- How to configure Express routes to work with JWT
- How to define Data Models and association for Authentication and Authorization
- Way to use Sequelize to interact with MySQL Database

## User Registration, User Login and Authorization process.
The diagram shows flow of how we implement User Registration, User Login and Authorization process.

## The following table shows overview of the Rest APIs that will be exported:

_Methods_	        _Urls_	                     _Actions_

GET	            api/tutorials	            get all Tutorials
GET	            api/tutorials/:id	        get Tutorial by id
POST	        api/tutorials	            add new Tutorial
PUT	            api/tutorials/:id	        update Tutorial by id
DELETE	        api/tutorials/:id	        remove Tutorial by id
DELETE	        api/tutorials	            remove all Tutorials
GET	            api/tutorials/published	    find all published Tutorials
GET	            api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'

## Project setup
```
npm install
```

### Run
```
node server.js
```
