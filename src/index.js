const mongoose = require("mongoose")
const express = require("express")
const app = require("./app")

mongoose.connect("mongodb://127.0.0.1:27017/ContactManegmentApp").then(()=>{
    console.log("connected to mongodb")
}).catch((error)=>{
    console.log(error)
})


app.listen(3000,()=>{
    console.log("connected to server")
})