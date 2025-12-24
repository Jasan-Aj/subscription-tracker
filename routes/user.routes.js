import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRoueter = Router();

userRoueter.get('/',getUsers);

userRoueter.get('/:id',authorize,getUser);

export default userRoueter;