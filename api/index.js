const express = require('express')
const app = express();
const dotenv =require('dotenv');
const mongoose =require('mongoose')

dotenv.config();

app.use(express.json());


mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("DataBase connected")
})
.catch((err)=>{
    console.log(err)
})

app.get('/get',(req,res)=>{
    res.send("hi")
})


app.listen(5000,()=>{
console.log("sever started")
})
