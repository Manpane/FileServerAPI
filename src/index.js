const express = require("express");
const api_routes = require("../src/routes/file.routes");

const server = express();

//routes
server.set("view engine","ejs");

server.get("/",(req,res)=>res.render("index"))

server.use("/api/files", api_routes);

//starting the server
server.listen(8000, ()=>console.log(`Listening to the port 8000`));
