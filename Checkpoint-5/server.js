const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const port=8085;
const db=require("./models");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to Upgrad Movie booking application development."
    })
});

db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{console.log("Connected to Database....")})
.catch(()=>{console.log(err)})

require("./routes/artist.route")(app);
require("./routes/genre.route")(app);
require("./routes/movie.route")(app);
require("./routes/user.route")(app);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
