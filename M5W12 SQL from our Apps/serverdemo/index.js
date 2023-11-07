// const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const {Pool}      = require('pg');
const app = express();
const PORT = 8080;

const pool = new Pool({
  user: 'alvinng',
  host: 'localhost',
  password: 'alvinng',
  database: 'intro',
  port: 5432
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
	res.send('ok');
})

app.get('/', (req, res) => {
	const query = req.query.query;
	templateVars = {resp: null}
	res.render('home', templateVars);
})

app.post('/query', (req, res) => {
	const id = req.body.id;
	const age = req.body.age;
	console.log(id, age);
	let query = ``
	if(age) {
		query += `Select * from pets where age > $1;`
	}

	if(id) {
		query += `select * from pets where id = $1;`
	}
	const value = id ? id : age;

	pool.query(query, [value])
	.then((resp) => {
		const templateVars = {resp}
		res.render('home', templateVars);
	})
})

app.post('/add/pets', (req, res) => {
	const { name, species, breed, sex, user_id, age } = req.body;
	console.log(req.body);
	console.log(name, species, breed, sex, user_id, age);
	pool.query('INSERT INTO pets(name, species, breed, sex, user_id, age) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;', 
	[name, species, breed, sex, user_id, age])
	.then(resp => {
		console.log(resp.rows);
		const templateVars = {resp}
		res.render('home', templateVars);
	}).catch(err => {
		console.log(err);
	})
})

const insertUser = (name, email, age) => {
	const queryStr = 'Insert into users(name, email, age) VALUES($1, $2, $3) RETURNING *;';
	const value = [name, email, age]
	return pool.query(queryStr, value);
}

app.post('/add/user', (req, res) => {
	const {name, email, age} = req.body; 
	insertUser(name, email, age)
	.then(resp => {
		console.log(resp.rows);
		res.send(resp.rows)
	}).catch(err => {
		console.log(err);
	})
})

app.get('/users', (req, res) => {
	const templateVars = {};
	res.render('users', templateVars);
})

app.listen(PORT, () => console.log("Server is listening on:", PORT));