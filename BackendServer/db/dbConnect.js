import mongoose from "mongoose";
import "dotenv/config";

export const dbConnect=async()=>{
    try {
        const mongo_url= process.env.MONGO_URI || "mongodb://localhost:27017/test";
        const user=process.env.MONGO_USER;
        const pass=process.env.MONGO_PASS;
        await mongoose.connect(mongo_url,{user,pass});
        console.log('db connected successfully');
        
    } catch (error) {
        console.log("error in db connection:",error.message);
    }
}