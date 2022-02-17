const db=require("../models");
const Movies=db.movie;
exports.getAllMovies=(req,res)=>{
    Movies.find()
    .then(data=>{
        res.json({
            MovieData:data,
            message:"Sucess...."
        })
    })
}

exports.getPublishedMovies=(req,res)=>{

Movies.find({published:true})
.then(data=>{
    res.json({
        MovieData:data,
        message:"Sucess..."
    })
})

}

exports.getReleasedMovies=(req,res)=>{

    Movies.find({released:true})
    .then(data=>{
        res.json({
            MoviesData:data,
            message:"Sucess..."
        })
    })
}

exports.getMoviesByID=(req,res)=>{
    //console.log(req.params['id']);
    if(!req.params['id']) 
    {
        res.json({
            message:"Please provide ID..."
        })
        return;
    }
    const id=req.params['id'];
    Movies.find({movieid:id})
    .then(data=>{
        res.json({
            MovieData:data,
            messsage:"Sucess..."
        })
    })
}

exports.getDetailedTitle=(req,res)=>{
    //console.log(req.params.title);
        if(!req.params.title)
          {
             res.json({
                   message:"Please provide Title..."
         })
    return;
}

const ti=req.params.title;
//console.log(ti);
Movies.find({title:ti})
.then(data=>{
    res.json({
        MoviesData:data,
        message:"Sucess.."
    })
})

}

exports.getShows=(req,res)=>{

    if(!req.params.title)
          {
             res.json({
                   message:"Please provide Title..."
         })
    return;
}

const ti=req.params.title;
//console.log(ti);
Movies.find({title:ti},{shows:1,_id:0})
.then(data=>{
    res.json({
        MoviesData:data,
        message:"Sucess.."
    })
})
}

