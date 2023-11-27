const express  =require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./Modals/User");
const app =express();

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/newProject").then(console.log("db connected")).catch((err)=>(err))

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    userModel.findOne({email: email}).then(user=>{
        if(user){
            if(user.password === password){
                
            } else{res.json("The password has incorrect")}
        }else{
            res.json("There is no User with this Detailes")
        }
    })
})

app.post("/register",(req,res)=>{
     userModel.create(req.body)
    .then(Users => res.json(Users))
    .catch((err)=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server runing on Port no 3001")
})