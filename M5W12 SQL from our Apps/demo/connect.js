const { Client, Pool } = require('pg');

const pool = new Pool({
  user: "alvinng",
  host: "localhost",
  database: "intro",
  port: 5432,
  password: "alvinng"
});

pool.query('SELECT * FROM users where id = 1;')
.then((res) => {
  console.log(res.rows);
})

const getAll = (item) => {
  pool.query(`SELECT * FROM ${item};`)
  .then((res) => {
    console.log(res.rows);
    return res.rows;
  }).catch((err) => {
    console.log(err);
  })
}

getAll('users')
getAll('pets')