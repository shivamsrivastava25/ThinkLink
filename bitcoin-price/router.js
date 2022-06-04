const express = require("express");

const router = express.Router();

const Controller = require("./controller");

router.get("/getBitcoinPrice", Controller.CurrentPrice);

module.exports = router;  