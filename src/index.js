const express = require("express");
const api_routes = require("../src/routes/file.routes");
const errorHandler = require("../src/middlewares/errorHandler")

const server = express();

server.use(errorHandler);

//routes
server.use("/api/files", api_routes);

//starting the server
server.listen(8000, ()=>console.log(`Listening to the port 8000`));
