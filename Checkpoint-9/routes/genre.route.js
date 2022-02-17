module.exports=(app)=>{
    var router=require("express").Router();
    router.get("/genre",(req,res)=>{
        //res.json("All Genres Data in JSON format from Mongo DB");
        gen.getGenres(req,res);
    })

    app.use("/api",router);
}

const gen=require("../controllers/genre.controller");