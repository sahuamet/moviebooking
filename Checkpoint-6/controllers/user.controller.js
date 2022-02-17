const { user } = require("../models");
const db=require("../models");
const { v4: uuidv4 } = require("uuid");
const User=db.user;
exports.signup=(req,res)=>{

   if(!req.body.username || !req.body.password || !req.body.first_name )
   {
      res.status(400).send({message:"Please provide Email and password"})
      return;
   }
   
   const filter={email:req.body.email};
   User.findOne(filter,(err,user)=>{
       if(err || user!==null)
       {
           res.status(400).send({message:"User Already Exists..."});
       }
       else{
           const test=new User({
             userid:req.body.userid,
             email:req.body.email,
             first_name:req.body.first_name,
             last_name:req.body.last_name,
             username:req.body.username,
             password:req.body.password,
             role:req.body.role,
             isLoggedIn:req.body.isLoggedIn,
             uuid:req.body.uuid?req.body.uuid:"",
             accesstoken:req.body.accesstoken?req.body.accesstoken:"",
            coupons:req.body.coupons?req.body.coupons:"",
            bookingRequest:req.body.bookingRequest?req.body.bookingRequest:""  
           })
       }
   });

   user.save(user)
   .then(data=>{res.status(200).send(data);})
   .catch(err=>{res.status(500).send({message:"Some Error Occured"})});
}

exports.logout=(req,res)=>{
    if(!req.body.id)
    {
        res.status(400).send({message:"Please Provide ID..."});
        return;
    }

    const update={isLoggedIn:false};
    User.findOneAndUpdate(req.body.id,update)
    .then(data=>{
        res.json({
            userData:data,
            message:"Logged Out Successfully..."
        })
        //.catch(err=>{
        //   res.status(500).send({message:"Error Updating..",err})
        //})
    });    

}

exports.login=(req,res)=>{
   if(!req.body.username || !req.body.password)
   {
       res.status(400).send({message:"Please provide Email/password"});
       return;
   }
   else
   {
       const filter={username:req.body.username};
      // console.log(filter);
       
       User.findOne(filter,(err,user)=>{
           if(err || user===null)
           {
               res.status(401).send({message:"Email/Password Incorrect"});
               return;
           }
           else{
               if(req.body.username===user.username)
               {
                   if(req.body.password===user.password)
                   {
                      // res.status(200).send({message:"Logged In Successfully..."});
                       //const updte={isLoggedIn:true};
                      // console.log(user);
                      const uniqueId = uuidv4();
                      //console.log(uniqueId);
                      //user.accesstoken=uniqueId;
                       //user.isLoggedIn=true;
                       User.findOneAndUpdate(filter,{isLoggedIn:true},{uuid:uniqueId})
                       .then((user)=>{
                           res.status(200).json({
                            message:"Logged In Successful",   
                            user
                               
                           })
                       })
    
                   }
                   else{
                         res.status(400).send({message:"Password Incorrect"});
                   }
               }
               else{
                   res.status(400).send({message:"Username Incorrect"});
               }
           }
       })
   }

}

exports.coupons=(req,res)=>{
   // console.log(req.query.id);
    //const category=req.params.categoryName;
    //var filter={category:{$regex:new RegExp(category),$options:i}}
    if(!req.query.id)
    {
        res.status(400).send({message:"Please Provide ID..."});
        return;
    }

    User.find({_id:req.query.id},{coupens:1,_id:0})
    .then(data=>{
        //console.log(userData);
        res.json({
                  CouponData:data,
                  message:"Sucess.."
        })
        //.catch(err=>{
        //   res.status(500).send({message:"Error Updating..",err})
        //})
    });    

}

exports.bookings=(req,res)=>{

    if(!req.query.id)
    {
        res.status(400).send({message:"Please Provide ID..."});
        return;
    }

    User.find({_id:req.query.id},{bookingRequests:1,_id:0})
    .then(data=>{
        //var userData=data.bookingRequest;
        //console.log(userData);
        res.json({
            BookingData:data,
            message:"Sucess..."
        })
        //.catch(err=>{
        //   res.status(500).send({message:"Error Updating..",err})
        //})
    });    

}

   