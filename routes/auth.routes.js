import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up',(req, res)=>{
    res.send("hello ist")
});

export default authRouter;