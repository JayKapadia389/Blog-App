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
    origin : "http://localhost:5173",     
    credentials:true,
    optionSuccessStatus:200 
}

app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(mongoUri , {
    useNewUrlParser : true , useUnifiedTopology : true
}).then(console.log("connected to database")).catch((err)=>{ console.log(err)});

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

    console.log(req.headers);

    let token = req.cookies.authToken ;

    if(!token){
        res.sendStatus(401);
        return;
    }
    else{

        try{
            let payload = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET);

            req.payload = payload;
            console.log(req.payload);

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

    // userID banavani che

    Users.create({
        // UserId
        firstName,
        lastName,
        emailId,    
        password,
        bio:"",
        profilePic: "https://res.cloudinary.com/dgqba5trl/image/upload/v1695840031/blank-profile-picture-973460_1280_reoqj4.webp",
        followerCount: 0,
        followingCount: 0 ,
        postsCount:0,
        posts:[]
    })

    let token = jwt.sign( payload ,process.env.ACCESS_TOKEN_SECRET  ); // payload

    res.cookie("authToken" , token ,{ httpOnly : true , sameSite : "none" , secure : true})

    res.json({code : 2});    
})

app.post("/login" , async (req , res)=>{

    let { emailId , password } = req.body ;

    let user = await Users.findOne({emailId});
    let payload = { emailId };

    console.log("user>> ",user);

    if(!user || (password != user.password)){
        res.json({ code : 1 , message : "email or password is incorrect"});
    }
    else{

        let token = jwt.sign( payload , process.env.ACCESS_TOKEN_SECRET);

        res.cookie("authToken" , token ,{ httpOnly : true , sameSite : "none" , secure : true})
        res.json({ code : 2 });

    }

})

app.get("/explore" ,AuthenticateToken, async (req , res)=>{

   res.send("done");

})

app.get("/postarticle" ,AuthenticateToken, async (req , res)=>{

    res.send("done");
 
 })

app.get("/userprofile" ,AuthenticateToken, async (req , res)=>{
    
    let emailId = req.payload.emailId ;

     let user = await Users.findOne({emailId});

    console.log(user);

    res.send(user);

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