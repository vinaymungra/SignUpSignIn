const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
require('dotenv').config()

const PORT = process.env.PORT || 3000;
const routes=require('./userRoutes')
app.use('/sign',routes)
mongoose.connect("mongodb+srv://vinay:vinay123@cluster0.035ute2.mongodb.net/club5?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("DB connected");
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})