import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";

const userRoueter = Router();

userRoueter.get('/',getUsers);

userRoueter.get('/:id',getUser);

export default userRoueter;