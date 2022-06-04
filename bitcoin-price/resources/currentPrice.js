const axios = require("axios");

module.exports = async () => {
  try {
    let url =
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
    const resp = await axios.get(url);
    return {
      error: false,
      data: resp.data.bitcoin.usd ,
    };
  } catch (error) {
     return { error: true };
  }
};