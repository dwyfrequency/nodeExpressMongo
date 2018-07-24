// nodemon - lets us save and restart our page without rebooting our app file to see changes
const express = require("express");
const log = console.log;

const app = express();

// Index Route
app.get('/', (req, res) => {
  // first param - endpoint, second param callback - for request and response 
  res.send('INDEX'); // now when we call the endpoint, we get this text in the browser
});

app.get('/about', (req, res) => {
  // first param - endpoint, second param callback - for request and response 
  log(req.name);
});

const port = 5000;

// starts server on port 5000
app.listen(port, () => {
  log(`Server started on port ${port}`);
});
