const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');

// Middleware
app.set('view engine', 'ejs');
// req.body
app.use(express.urlencoded({extended: false}));
// require my language file
const languages = require('./languages.json');
// use Cookie Parser
app.use(cookieParser());

// Fake user DB
const users = {
  abcd: {
    id: "abcd",
    email: "a@a.com",
    password: "1234",
  },
  efgh: {
    id: "efgh",
    email: "b@b.com",
    password: "1234",
  },
};

app.get('/', (req, res) => {
  // undefined || "en"
  // "fr" || "en"
  // const langChoice = req.cookies.langChoice === undefined ? "en" : req.cookies.langChoice
  const langChoice = req.cookies.langChoice || "en";

  const templateVars = {
    heading: languages.homeHeadings[langChoice],
    body: languages.homeBodies[langChoice]
  }
  res.render('home', templateVars)
})

app.get('/login', (req, res) => {

  res.render('login');
})

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  if(!email || !password) {
    return res.status(400).send("You must provide an eamil and password")
  }

  let foundUser = null;

  for(let userId in users) {
    if(users[userId].email === email) {
      foundUser = users[userId]
    }
  }

  if(!foundUser) {

    return res.status(400).send('No email matching')
  }

  // if the found user password is not the password the user has typed in
  if(foundUser.password !== password) {
    return res.status(401).send('Incorrect password')
  }

  res.cookie('userId', foundUser.id)
  res.redirect('/')
})


app.get('/languages/:id', (req, res) => {
  const lang = req.params.id;
  // cookies are just an object
  // set the obj, key 
  // then you have to pull the obj value
  // cookies["key"] = "value"
  // cookies["key"] = "value2"
  res.cookie('key', 'value');
  res.cookie('langChoice', lang);
  res.redirect('/');
})

app.listen(PORT, () => {
  console.log('The App is listening on PORT ' + PORT);
})