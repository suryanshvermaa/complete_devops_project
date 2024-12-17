import { Router } from "express";
import {createUser,getUser} from "../controllers/user.controller.js";

const userRouter=Router();

userRouter
.get('/user/:email',getUser)
.post('/createUser',createUser)


export default userRouter;