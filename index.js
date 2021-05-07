const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const url = "mongodb://localhost/users";

const app = express();

// database connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology:true });
const con = mongoose.connection;

con.on("open", function () {
    console.log(" Database connected.......");
})
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); //
// loading routes
const userroutes = require("./routes/users");
app.use("/users", userroutes);
// listening to server
app.listen(9000, function(){
    console.log(`server is running on localhost 9000`);
})