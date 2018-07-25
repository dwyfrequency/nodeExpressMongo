// nodemon - lets us save and restart our page without rebooting our app file to see changes
const express = require("express");
const exphbs = require('express-handlebars');
const log = console.log;

const app = express();

// Handlebars middleware
app.engine( 'handlebars', exphbs({ 
  defaultLayout: 'main' 
}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
  // first param - endpoint, second param callback - for request and response 
  res.render('index'); // now we are saying render the index.html
});

app.get('/about', (req, res) => {
  // first param - endpoint, second param callback - for request and response 
});

const port = 5000;

// starts server on port 5000
app.listen(port, () => {
  log(`Server started on port ${port}`);
});
