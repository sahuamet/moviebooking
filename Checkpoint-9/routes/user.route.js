module.exports=(app)=>{
    var router=require("express").Router();
    router.post("/login",(req,res)=>{
          user.login(req,res);
    });
    router.post("/signup",(req,res)=>{
        user.signup(req,res);

    });
    router.post("/logout",(req,res)=>{
         user.logout(req,res);
    });
    router.get("/coupons",(req,res)=>{
         user.coupons(req,res);
    });
    router.get("/bookings",(req,res)=>{
          user.bookings(req,res);
    });

    app.use("/api",router);
}

const user=require("../controllers/user.controller");