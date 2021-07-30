var express = require('express');
var rg = require('random-greetings')
var router = express.Router();
var moment = require('moment'); // require
const app = require('../app');
var greet = [
"Greetings",
  "Hello",
  "Hola",
  "Ciao",
  "Bonjour",
  "Howdy"
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    // user: 'Hello Travelers!', dt: (new Date()).toString(),
    greet: greet[Math.floor(Math.random()*greet.length)],
    time:moment().utc().format("dddd, MMMM Do YYYY, h:mm a UTC"),
  })
});

  
router.get("/about", (req, res, next) => {
  res.render("about")
})

router.get("/team", (req, res, next) => {
  res.render("team")
})

router.get("/register", (req, res, next) => {
  res.render("register")
})


router.get("/gallery", (req, res, next) => {
  res.render("gallery")
})


router.post("/thankyou", (req, res, next) => {
  res.render("thankyou")
})

module.exports = router;
