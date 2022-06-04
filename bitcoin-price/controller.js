const currentPrice = require("./resources/currentPrice");
const { errorObject } = require("./config");
const database = require("./database");
var alerts = require("./alerts");
const CronJob = require("cron").CronJob;


var monitor = new CronJob("*/30 * * * * *", 
    async function  () {
    try {
      let price = await currentPrice();
    //   if (price.error) 
    //   {
    //       return res.status(500).json(errorObject);
    //   }
    //   else{
    //       database.InsertRecord(price.data);
    //   }
    //   return res.status(200).json({
    //     success: true,
    //     price_data: price,

    //   });
        database.InsertRecord(price.data);
    } 
    catch (error) {
       //return res.status(500).json(errorObject);
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
  