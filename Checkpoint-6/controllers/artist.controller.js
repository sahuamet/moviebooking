const db=require("../models");
const Artist=db.artist;
exports.getArtists=(req,res)=>{

Artist.find()
.then(data=>{
    res.json({
        ArtistData:data
    })
})


}



