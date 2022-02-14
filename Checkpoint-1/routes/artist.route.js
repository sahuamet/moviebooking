module.exports=(app)=>{
    var router=require("express").Router();
    router.get("/artists",(req,res)=>{
        res.json("All Artists Data in JSON format from Mongo DB");
    })

    app.use("",router);
}