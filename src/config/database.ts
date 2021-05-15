import * as mysql from "mysql2/promise";

const db = {
    host : "us-cdbr-east-03.cleardb.com",
    port : 3306,
    user : "b0864fe615422d",
    password : "722c0170",
    database : "heroku_f74c8f658e5fd4d",
    connectionLimit : 50,
    waitForConnections : true
};

const pool = mysql.createPool(db);

export default pool;