import { Router } from "express";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req, res)=>{
    res.send("get all subscriptions")
});

subscriptionRouter.get('/:id',(req, res)=>{
    res.send("get specific subscription")
});

subscriptionRouter.post('/',authorize,createSubscription);

subscriptionRouter.put('/:id',(req, res)=>{
    res.send("update subscription")
});

subscriptionRouter.delete('/:id',(req, res)=>{
    res.send("delete subscription")
});

subscriptionRouter.get('/user/:id',authorize ,getUserSubscriptions);

subscriptionRouter.put('/:id/cancel',(req, res)=>{
    res.send("cancel subscription")
});

subscriptionRouter.get('/upcoming-renewals',(req, res)=>{
    res.send("get upcoming reewals");
});



export default subscriptionRouter;