

const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

//const port = 5000;
const port = process.env.PORT || 5000;

app.use("/api/contacts",require("./routes/contactRoutes")) //Middleware

app.listen(port,()=>
{
    console.log(`ssdf dsfds fd : ${port}`);
});