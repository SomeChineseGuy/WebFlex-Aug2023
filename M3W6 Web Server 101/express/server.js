// const http = require('http');
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser')

// Every Request has 2 things, the type of request and the url for it
// type === GET || POST
// /something GET
// /something POST

// Express is going to use Middleware
app.set('view engine', 'ejs');

// Use Body praser to see what data the user has sent to the back end
app.use(bodyParser.urlencoded({extended:true}));

// Fake database
const cats = {
  1: {
    name: 'Captain Meow'
  }
}

const morecats = {
  name: "Kittens"
}

let key = 2;

app.get('/', (req, res) => {
  res.render('home')
});


// CATS
app.get('/cats', (req, res) => {
  console.log(cats["1"].name)
  const tempVars = {
    cats,
    morecats
  }
  console.log(morecats.name);
  res.render('cats', tempVars)
})

app.post('/cats', (req, res) =>{
  const catName = req.body.catName
  cats[key] = {
    name: catName
  }

  key++
  console.log(cats);
  res.redirect('/cats')
})



// DOGS
app.get('/dogs', (req, res) => {
  res.render('dogs')
})



app.listen(PORT, () => {
  console.log('Server is on ' + PORT);
})