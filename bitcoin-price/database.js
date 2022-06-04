const sqlite3 = require('sqlite3').verbose();
const { errorObject } = require("./config");

let db = new sqlite3.Database('./BitcoinPrice.db');

exports.InsertRecord=(value)=>{
    try{
        dateNow = new Date();
        db.run(`INSERT INTO Price(Price, Timestamp) VALUES(?,?)`, [value, dateNow], function(err) {
            if (err) {
              return console.log(err.message);
            }
            console.log(`A row has been inserted with value  ${value}`);
          });
        
          db.close();
    }
    catch (error) {
        return res.status(500).json(errorObject);
     }
};
