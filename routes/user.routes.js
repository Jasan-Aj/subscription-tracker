import { Router } from "express";

const userRoueter = Router();

userRoueter.get('/',(req, res)=>{
    res.send("get all users");
})

export default userRoueter;