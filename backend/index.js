var express = require('express');
var passport = require('passport');
var passport = require('passport');
var FacebookTokenStrategy = require('passport-facebook-token');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

app.use(cors());
passport.use(new FacebookTokenStrategy({
	clientID: 'app-id',
	clientSecret: 'app-secret'
},
function (accessToken, refreshToken, profile, done) {
	return done(null,profile);
}));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('hello world')
});

app.post('/facebook/login',passport.authenticate('facebook-token', {session: false}), function (req, res) {
	return res.status(200).json(req.user);
})

app.listen(3000, () => {
	console.log("Server is up and listering on 3000");
});
