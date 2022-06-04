const currentPrice = require("./resources/currentPrice");
const { errorObject } = require("./config");
const database = require("./database");

exports.CurrentPrice = async (req, res) => {
    try {
      let price = await currentPrice();
      if (price.error) 
      {
          return res.status(500).json(errorObject);
      }
      else{
          database.InsertRecord(price.data);
      }
      return res.status(200).json({
        success: true,
        price_data: price,

      });
    } catch (error) {
       return res.status(500).json(errorObject);
    }
  };