const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>happy new year</h1>");
});
app.listen("3000",()=>{
    console.log("connection successful");
})