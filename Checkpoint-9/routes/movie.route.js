const movie=require("../controllers/movie.controller");

module.exports=(app)=>{
    var router=require("express").Router();
    router.get("/movies",(req,res)=>{
        //res.json("All Movies Data in JSON format from Mongo DB");
        movie.getAllMovies(req,res);
    })

    router.get("/movies/published",(req,res)=>{
        movie.getPublishedMovies(req,res);
    })

    router.get("/movies/released",(req,res)=>{
        movie.getReleasedMovies(req,res);
    })

    router.get("/movies/:id",(req,res)=>{
        movie.getMoviesByID(req,res);
    })

    router.get("/movies/title/:title",(req,res)=>{
        movie.getDetailedTitle(req,res);
    })

    router.get("/movies/shows/:title",(req,res)=>{
        movie.getShows(req,res);
    })

    app.use("/api",router);
}

