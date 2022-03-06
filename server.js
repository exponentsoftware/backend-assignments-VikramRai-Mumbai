const express = require("express");
require("dotenv").config();
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");


//cors
const corsOptions = {
  origin: "https://soal-capstone-project.herokuapp.com"
};
//middlewares
   //app.use(cors(corsOptions));
   app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  }); 
 //body-parser
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended: true }));
//routes
require("./route/todo")(app);

const port = process.env.PORT || 3001; 
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