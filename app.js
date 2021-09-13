const express = require('express');
const db = require('./dbConnect')
const app=express();
const port =3016;
const userRouter=require("./routers/userRouter")

db.connect();
app.use('/user', userRouter);


app.listen(port,()=>{
    console.log("app is running")
})