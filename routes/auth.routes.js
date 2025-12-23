import { Router } from "express";
import { signin, signOut, signUp } from "../controllers/auth.contoller.js";

const authRouter = Router();

authRouter.post("/sign-up",signUp);
authRouter.post("/sign-in",signin);
authRouter.post("/sign-out",signOut);

export default authRouter;