require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mongoUri = process.env.MONGO_URI;

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
})