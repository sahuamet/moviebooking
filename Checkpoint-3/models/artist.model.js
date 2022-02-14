module.exports=(mongoose)=>{
    const artist=mongoose.model("artists",mongoose.Schema({
        artistid:{type:Number},
        first_name:{type:String},
        last_name:{type:String},
        wiki_url:{type:String},
        movies:[String]
    }))

    return artist;
}