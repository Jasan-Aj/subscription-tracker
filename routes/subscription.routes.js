import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req, res)=>{
    res.send("get all subscriptions")
});

subscriptionRouter.get('/:id',(req, res)=>{
    res.send("get specific subscription")
});

subscriptionRouter.post('/',(req, res)=>{
    res.send("create new subscription")
});

subscriptionRouter.put('/:id',(req, res)=>{
    res.send("update subscription")
});

subscriptionRouter.delete('/:id',(req, res)=>{
    res.send("delete subscription")
});

subscriptionRouter.get('/user/:id',(req, res)=>{
    res.send("get all use'r subscriptions")
});

subscriptionRouter.put('/:id/cancel',(req, res)=>{
    res.send("cancel subscription")
});

subscriptionRouter.get('/upcoming-renewals',(req, res)=>{
    res.send("get upcoming reewals");
});



export default subscriptionRouter;