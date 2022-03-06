const express = require("express");
require("dotenv").config();
const app = express();
const session = require('express-session');
const passport = require('passport');
const bodyparser = require("body-parser");
const cors = require("cors");
//port
const port = process.env.PORT || 3001; 
//passport
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = process.env.clientID;
const GOOGLE_CLIENT_SECRET = process.env.clientSecret;  
if(port === 3000){
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/google/callback" ,
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));
}else{
  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://todo-app-monoceros.herokuapp.com/google/callback" ,
    passReqToCallback: true,
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));
}
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

//cors
const corsOptions = {
  origin: "https://soal-capstone-project.herokuapp.com"
};
//middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
   //app.use(cors(corsOptions));
   app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  }); 
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
 //body-parser
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended: true }));
//routes
require("./routes/todo")(app);
require("./routes/user")(app);


//mongodb connect
const db = require("./model");
const Mongourl = process.env.MONGODB_URL;
db.mongoose.connect(Mongourl, {
   useNewUrlParser:true,
   useUnifiedTopology:true

})
.then( () => {
  console.log("MongoDB connected succcessfully");
})
.catch((err)=>{
    console.log("MongoDB connection failed : ", err);
})


app.listen(port, (req, res)=>{
    console.log(`server running on port ${port}`)
})