

const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
connectDb();
const app = express();

app.use(express.json());

//const port = 5000;
const port = process.env.PORT || 5000;

app.use("/api/contacts",require("./routes/contactRoutes")) //Middleware
app.use(errorHandler);
app.listen(port,()=>
{
    console.log(`Listening Port is  : ${port}`);
});