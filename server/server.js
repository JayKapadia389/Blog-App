require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mongoUri = process.env.MONGO_URI;
const mongoose = require('mongoose');

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

Users.create(
    {
        UserId : 1,
        firstName: "Robert" ,
        lastName:"Hook",
        emailId:"roberthook243@gmail.com",
        password:"#123Abcd",
        profilePic:"https://res.cloudinary.com/dgqba5trl/image/upload/v1694888780/alexander_isz8cj.jpg", //link
        bio:"Lets dissect that technology 🗡️",
        followerCount:234,
        followingCount:352,
        postsCount:235,
        posts:[{
            UserId : 1,
            date : new Date(),
            coverImage : "https://res.cloudinary.com/dgqba5trl/image/upload/v1689876602/cld-sample-4.jpg" , //link
            title : "Stop Writing TypeScript Interfaces, Automate It",
            body : "Postman is an API testing tool that can help us test API. It can be used to test API both locally and hosted. It also acts as a documentation for the API you are building and it is programming language independent.Now, imagine this, you have full documentation for your API as a postman collection (A Postman collections can be thought of as a folder that contains requests or other collection inside it). Each collection in Postman can be downloaded/saved as a JSON file which has two schema versions. They are collection v2 and collection v2.1 and share the collection as a JSON file.",
            duration: 4,
            category : "Programming",
            likeCount : 59,
            shareCount: 43
            
        }]
    }
)

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
})