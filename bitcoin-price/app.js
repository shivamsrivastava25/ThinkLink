const express = require("express");

const router = express.Router();

const app = express(); 

const PORT = process.env.PORT || 8000; 

const Controller = require("./controller");

app.use(express.json());

app.get("/getBitcoinPrice", Controller.CurrentPrice);

app.get("/", (req, res) => {        
    return res.json({ status: "Application is running" });
  }
);

app.listen(PORT,() => 
    console.log("Server started listening")
);   