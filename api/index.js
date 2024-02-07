import express  from 'express';
const app = express();
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

app.use(express.json());


mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("DataBase connected")
})
.catch((err)=>{
    console.log(err)
})

app.listen(5000,()=>{
console.log("sever started")
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);


app.use((err,req,res,next)=>{
    const statusCode =err.statusCode ||500;
    const message =err.message ||'Internal Server Error';
    res.status(statusCode).json(
       { success : false,
        statusCode,
        message}
        );
})