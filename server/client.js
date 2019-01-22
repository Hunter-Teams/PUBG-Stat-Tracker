const pg = require("pg");
// configure the path to the database that you wish to interact with
const postgresUrl= 'postgres://localhost/input'
// create a new client
const client = new pg.Client({
    user: "postgres",
    host: 'localhost',
    database: 'pubg_stats',
    password: '',  //  ENTER YOUR PASSWORD!!!
    port: 5432
})
// connect your client to your database
client.connect();

client.query('select * from users', (err, data) => {
    if (err) console.error(err);
    console.log(data);
    console.log("Kek");

})
// export the client to use elsewhere in your express app for working with queries.
module.exports = client;

// connecting to Heroku
/* const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
  sslmode=require
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
*/
