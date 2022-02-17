module.exports=(mongoose)=>{
    const genre=mongoose.model("genres",mongoose.Schema({
        genreid:{type:Number},
        genre:{type:String}
    }))

    return genre;
}