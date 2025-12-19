import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRoueter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectDatabase from "./database/mongodb.js";

const app = express();

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRoueter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.get("/",(req, res)=>{
    res.send("well come to subscription tracker");
});

app.listen(PORT,async ()=>{
    await connectDatabase();
});