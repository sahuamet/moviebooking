module.exports=(app)=>{
    var router=require("express").Router();
    router.post("/login",(req,res)=>{

    });
    router.post("/signup",(req,res)=>{

    });
    router.post("/logout",(req,res)=>{

    });
    router.get("/coupons",(req,res)=>{

    });
    router.get("/bookings",(req,res)=>{

    });

    app.use("",router);
}

const user=require("../controllers/user.controller");