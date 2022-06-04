const express = require("express");

require("dotenv").config();

const router = express.Router();

const app = express(); 

const PORT = process.env.PORT; 

const Controller = require("./controller");

app.use(express.json());


app.get("/", Controller.CurrentPrice);

app.listen(PORT,() => 
    console.log("Server started listening")
);   