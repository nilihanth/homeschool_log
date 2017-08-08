const sqlite3 = require('sqlite3').verbose();

var dbAccess = function() {
  // Open the database
  var db = new sqlite3.Database('src/db/homeschool.db', sqlite3.OPEN_READWRITE);
  console.log("Connected to the database...");

  // Create timestamps
  var dateMS = Date.now();
  var d = new Date();
  var dateStamp = d.getMonth() +"/"+ d.getDay() +"/"+ d.getFullYear();

  // Insert into the database
  db.run("");

  // Close the database
  db.close;
  console.log("Database connection closed.");
};