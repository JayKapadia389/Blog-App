require('dotenv').config();
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

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(mongoUri , {
    useNewUrlParser : true , useUnifiedTopology : true
}).then(console.log("connected to database")).catch((err)=>{ console.log(err)});

const commentSchema = mongoose.Schema({
    UserId : Number,
    date : Date,
    comment : String
});

const blogSchema = mongoose.Schema({
    UserId : Number,
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
    UserId : Number,
    firstName:String,
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

app.post("/signup" , (req , res)=>{

    res.send("signup successful");
    
})

app.get("/userprofile" , async (req , res)=>{

     let user = await Users.find();

    console.log(user[0]);

    res.send(user[0]);

})

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
})