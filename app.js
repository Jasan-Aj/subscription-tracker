import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRoueter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectDatabase from "./database/mongodb.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRoueter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.use(errorMiddleware);

app.get("/",(req, res)=>{
    res.send("well come to subscription tracker");
});

app.listen(PORT,async ()=>{
    await connectDatabase();
});