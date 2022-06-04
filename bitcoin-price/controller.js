const currentPrice = require("./resources/currentPrice");
const { errorObject } = require("./config");
const database = require("./database");
const alerts = require("./alerts");
const config = require("./config");
const CronJob = require("cron").CronJob;
require("dotenv").config();


var monitor = new CronJob("*/30 * * * * *", 
    async function  () {
    try {
        let price = await currentPrice();
        database.InsertRecord(price.data);
        if (price.data < process.env.LOWER_LIMIT){
            alerts.Alert(price.data, true);
        }
        else if (price.data > process.env.UPPER_LIMIT){
            alerts.Alert(price.data, false);
        }
    } 
    catch (error) {
        //error implementation
    }
});
exports.CurrentPrice = async (req, res)=>
{
    try{
        monitor.start();
        return res.status(200).json({
            success: true,
        });
    }
    catch (error) {
        return res.status(500).json(errorObject);
    }
}
  