import express from "express";
import {dbConnect} from "./db/dbConnect.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/v1',userRouter);
app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).send('server is healthy');
})

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    dbConnect().then(()=>{
        console.log(`server is running on port ${PORT}`);
    }).catch(()=>{
        console.log(`error in connecting db`);
        process.exit(1);
    });
})