// MySQL Connection file

// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// Variables for hosting on Heroku
// console.log("process.env",process.env);
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        port: 3306,
        host: "127.0.0.1",
        user: "dbuser",
        password: "SecureSQLPw%1",
        database: "burgers_db"
    });
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
