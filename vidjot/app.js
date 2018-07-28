// nodemon - lets us save and restart our page without rebooting our app file to see changes
// alt + shift + f will format code
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const log = console.log;

const app = express();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose
  // call local database
  .connect("mongodb://127.0.0.1:27017/vidjot") // removed , {useMongoClient: true}
  .then(() => log("MongoDB Connected..."))
  .catch(err => log(err));

// Load Idea Model
require("./models/Idea");
const Idea = mongoose.model("ideas");

// Handlebars middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Index Route
app.get("/", (req, res) => {
  const title = "Welcome";
  // now we are saying render the index.html
  res.render("index", {
    title
  }); // we can pass in variables with objects
});

// About Route
app.get("/about", (req, res) => {
  res.render("about");
});

// Add Idea Form
app.get("/ideas/add", (req, res) => {
  res.render("ideas/add");
});

const port = 5000;

// starts server on port 5000
app.listen(port, () => {
  log(`Server started on port ${port}`);
});
