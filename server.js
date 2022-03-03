const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3001;

//routes
require("./route/todo")(app);

app.listen(port, (req, res)=>{
    console.log(`server running on port ${port}`)
})