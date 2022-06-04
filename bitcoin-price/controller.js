const currentPrice = require("./resources/currentPrice");
const { errorObject } = require("./config");

exports.CurrentPrice = async (req, res) => {
    try {
      let price = await currentPrice();
      debugger;
      if (prices.error) return res.status(500).json(errorObject);
      return res.status(200).json({
        success: true,
        price_data: price,
      });
    } catch (error) {
       return res.status(500).json(errorObject);
    }
  };