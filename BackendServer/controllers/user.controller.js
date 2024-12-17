import User from "../model/user.model.js";

export const createUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;    
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"Please provide all fields",
            })
        }
        const user=new User({name,email,password});
        await user.save();
        res.status(201).json({
            success:true,
            message:"user created successfully",
            data:user
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"error in creation of user",
            error:error.message
        })
    }
}

export const getUser=async(req,res)=>{
    try {
        const email=req.params.email;
        const user=await User.findOne({email});
        res.status(200).json({
            success:true,
            message:"user fetched successfully",
            data:user
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"error in getting of user",
            error:error.message
        })
    }
}