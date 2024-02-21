require('dotenv').config();
const cookieParser = require('cookie-parser')
const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;
const mongoUri = process.env.MONGO_URI;
const mongoose = require('mongoose');
const corsOptions = {
    // origin : "http://localhost:5173",     
    origin : "https://blog-app-five-wheat.vercel.app/",     
    credentials:true,
    optionSuccessStatus:200 
}

app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(mongoUri , {
    useNewUrlParser : true , useUnifiedTopology : true
}).then(console.log("connected to database")).catch((err)=>{ console.log("catch : ",err)});

const commentSchema = mongoose.Schema({
    userId : Number,
    date : Date,
    comment : String
});

const blogSchema = mongoose.Schema({
    userId : Number,
    date : Date,
    coverImage : String ,
    title :String,
    body : String,
    duration: Number,
    category : String,
    likeCount : Number,
    shareCount: Number,
    comments: [commentSchema]
})

const userSchema = mongoose.Schema({
    userId : Number,
    firstName:String ,
    lastName:String,
    emailId:String,
    password:String,
    profilePic:String,
    bio:String,
    followerCount:Number,
    followingCount:Number,
    postsCount:Number,
    posts:[blogSchema]
})

const Users = mongoose.model("Users" , userSchema);

function AuthenticateToken(req,res,next){

    let token = req.cookies.authToken ;

    if(!token){
        res.sendStatus(401);
        return;
    }
    else{

        try{
            let payload = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET);

            req.payload = payload;

            next();

            return;

        }
        catch{
            res.sendStatus(498);

            return;
        }
    }

}

app.post("/signup" , async (req , res)=>{

    let {firstName , lastName , emailId , password } = req.body ;

    let user = await Users.findOne({emailId});
    let payload = { emailId };

    if(user){

        res.send("taken");

        return ;
    }

    firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1);
    lastName = lastName.slice(0,1).toUpperCase() + lastName.slice(1);

    console.log(firstName , " " , lastName) ;

    // userID banavani che

    Users.create({
        // UserId
        firstName,
        lastName,
        emailId,    
        password,
        bio:"hey there ! I am using blogspot.",
        profilePic: "https://res.cloudinary.com/dgqba5trl/image/upload/v1696008033/tiktok-no-profile-picture_n2pgwo.avif",
        followerCount: 0,
        followingCount: 0 ,
        postsCount:0,
        posts:[]
    })

    user = await Users.findOne({emailId});

    let token = jwt.sign( payload ,process.env.ACCESS_TOKEN_SECRET  ); // payload

    res.cookie("authToken" , token ,{ httpOnly : true , sameSite : "none" , secure : true})

    res.json({code : 2 , user});    
})

app.post("/login" , async (req , res)=>{

    let { emailId , password } = req.body ;

    let user = await Users.findOne({emailId});
    let payload = { emailId };

    if(!user || (password != user.password)){
        res.json({ code : 1 , message : "email or password is incorrect"});
    }
    else{

        let token = jwt.sign( payload , process.env.ACCESS_TOKEN_SECRET);

        let {firstName , lastName , emailId ,profilePic, bio , postsCount , followerCount , followingCount} = user;

        user = {firstName , lastName , emailId ,profilePic, bio , postsCount , followerCount , followingCount};

        res.cookie("authToken" , token ,{ httpOnly : true , sameSite : "none" , secure : true})
        res.json({ code : 2 , user});

    }

})

app.get("/explore" ,AuthenticateToken, async (req , res)=>{

   res.send("done");

})

app.get("/postarticle" ,AuthenticateToken, async (req , res)=>{

    res.send("done");
 
 })

app.post("/editprofile" , AuthenticateToken , async (req , res)=>{

    let {firstName , lastName , bio  , ppURL} = req.body ;

    let {emailId} = req.payload ;

    try{
        let user = await Users.findOne({emailId}) ;

        if(ppURL){
            user.profilePic = ppURL ;
        }

        firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1) ;
        lastName = lastName.slice(0,1).toUpperCase() + lastName.slice(1) ;

        user.firstName = firstName ;
        user.lastName = lastName ;
        user.bio = bio ;

        console.log(user) ;

        await user.save() ;

        res.json({user , code : 2 , message : "profile updated successfully."});

    }
    catch(err){

        console.error("Error updating profile:" , err);

        res.status(500).send({code : 1 , message : "An error occured while updating the profile."}) ;

    }

})

app.get("/authorprofile" ,AuthenticateToken, async (req , res)=>{

   res.send("done");

})

app.get("/article", AuthenticateToken , (req , res)=>{

    res.send("done");
})

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
})