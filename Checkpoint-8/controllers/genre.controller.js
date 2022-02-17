const db=require("../models");
const Genres=db.genre;
exports.getGenres=(req,res)=>{

Genres.find()
.then(data=>{
    res.json({
        GenreData:data
    });
})

}