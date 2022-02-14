module.exports=(app)=>{
    var router=require("express").Router();
    router.get("/movies",(req,res)=>{
        res.json("All Movies Data in JSON format from Mongo DB");
    })
    app.use("",router);
}