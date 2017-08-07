var xhr = new XMLHttpRequest();
xhr.open('GET', '../src/db/homeschool.db', true);
xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
  var uInt8Array = new Uint8Array(this.response);
  var db = new SQL.Database(uInt8Array);
  if (db) {
    console.log("Database connection initiated...")
  }
  //var contents = db.exec("SELECT * FROM daily");
  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
  var db_timestamp = Date();
  var insert_db_timestamp = db.run("INSERT INTO table1 (one, two) VALUES ('test', '1');");
  var check = db.exec("SELECT * FROM table1");
  console.log(check);
  db.close();
};
xhr.send();