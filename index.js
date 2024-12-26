// Import Express and user routes, create an instance of Express
const express = require('express');
const routes = require('./routes/users.js');
const app = express();
const PORT = 4000;

// Use JSON parsing middleware and user routes
//express app uses the middleware express.json() to handle the request as a json object.
app.use(express.json());
// express app uses routes to handle the endpoints which start with /user. 
//This means that for all the endpoints starting with /user, the server will go and look for an endpoint handler in users.js.
app.use("/user", routes);

// Start the server and log a message when it's running
app.listen(PORT, () => console.log("Server is running at port " + PORT));
