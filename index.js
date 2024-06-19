
require ('dotenv').config()
const express = require("express");
const  app = express();
const port =3400;


app.get("/",(req,res)=>{
    res.send("hello word")
})
app.get("/login",(req,res)=>{
    res.send(" wellcome the login page")
})
app.listen(process.env.port,()=>{
    console.log(`Example app listening on port ${port}`)
})