
const dotenv=require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors")
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors({  origin: '*', 
methods: ['GET', 'POST', 'PUT', 'DELETE'], 
allowedHeaders: ['Content-Type', 'Authorization'],
}));




// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(console.log('Connected to MongoDB'))
.catch((err)=>{
console.log(err)
})






// Routes
app.use('/api', apiRoutes);



app.listen(PORT,()=>
    {
        console.log("app is listening")
    })