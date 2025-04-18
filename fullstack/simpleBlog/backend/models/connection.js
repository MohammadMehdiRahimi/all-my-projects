import mysql from "mysql2/promise";

import "dotenv/config";
const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env;
const conn = await mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  database: "blog",
  password: "1234",
});

export default conn;
