//const { mongoose } = require(".");

module.exports=(mongoose)=>{
    const user=mongoose.model("users",mongoose.Schema({
        userid:{type:Number},
        email:{type:String,require:true},
        first_name:{type:String,require:true},
        last_name:{type:String},
        username:{type:String},
        password:{type:String},
        role:{type:String,default:'user'},
        isLoggedIn:{type:Boolean},
        uuid:"",
        accesstoken:"",
        coupons:[String],
        bookingRequest:[String]
    }))
    return user;
}