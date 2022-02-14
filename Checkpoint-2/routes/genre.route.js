module.exports=(app)=>{
    var router=require("express").Router();
    router.get("/genre",(req,res)=>{
        res.json("All Genres Data in JSON format from Mongo DB");
    })

    app.use("",router);
}