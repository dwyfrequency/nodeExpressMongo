// nodemon - lets us save and restart our page without rebooting our app file to see changes
const express = require("express");
const log = console.log;

const app = express();

// How middleware works
/* for some reason only intermediately works for me; **UPDATE - got it to work, issue was that i was running two express servers at once */
app.use(function (req, res, next) {
  log(Date.now()); // logs time for each endpoint call
  req.name = 'Mr. Decodes' // once we add this value to our request obj, we have access to it throughout the application
  next(); // calls next piece of middleware to run
});

// Index Route
app.get('/', (req, res) => {
  // first param - endpoint, second param callback - for request and response 
  res.send('INDEX'); // now when we call the endpoint, we get this text in the browser
});

app.get('/about', (req, res) => {
  // first param - endpoint, second param callback - for request and response 
  log(req.name);
  res.send(req.name); // now when we call the endpoint, we get this text in the browser
});

const port = 5000;

// starts server on port 5000
app.listen(port, () => {
  log(`Server started on port ${port}`);
});
