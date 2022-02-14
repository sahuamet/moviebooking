module.exports=(mongoose)=>{
    const movie=mongoose.model("movies",mongoose.Schema({
        movieid:{type:Number},
        title:{type:String},
        published:{type:Boolean},
        released:{type:String},
        poster_url:{type:String},
        release_date:{type:String},
        publish_date:{type:String},
        artists:[String],
        genres:[String],
        duration:{type:Number},
        critic_rating:{type:Number},
        trailer_url:{type:String},
        wiki_url:{type:String},
        story_line:{type:String},
        shows:{type:Object}
    }))

    return movie;
}