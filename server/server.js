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
    let payload = { ok : "tested"};

    if(user){

        res.send("taken");

        return ;
    }

    // userID banavani che

    Users.create({
        // UserId
        firstName,
        lastName,
        emailId,    
        password
    })

    let token = jwt.sign( payload ,process.env.ACCESS_TOKEN_SECRET  ); // payload

    res.cookie("authToken" , token ,{ httpOnly : true , sameSite : "none" , secure : true})

    res.json({code : 2});    
})

app.post("/login" , async (req , res)=>{

    let { emailId , password } = req.body ;

    let user = await Users.findOne({emailId});
    let payload = { ok : "tested"};

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

app.get("/userprofile" , async (req , res)=>{

     let user = await Users.find();

    console.log(user[0]);

    res.send(user[0]);

})

app.get("/article", AuthenticateToken , (req , res)=>{

    res.send("done");
})

app.get("/test" ,
//  AuthenticateToken ,
 (req,res)=>{

    console.log(req.cookies);

    res.send("test");

    console.log(req.cookies);
})

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
})