const express= require('express')
const mongoose = require('mongoose');
require('dotenv/config')
const cors = require('cors')
const Pet = require('./Pet.js')
const bodyParser=require('body-parser');
const pet = require('./Pet.js');
app=express()
app.use(cors())
app.use(bodyParser.json())



//db connection
mongoose.connect(process.env.DB_CONNECTION,()=>{
  console.log("Connected to db")
})


app.get('/find',(req,res)=>{
  pet.find({}).then(res=>{
    res.Json()
  }
  ).catch(err=>{
    console.log(err)
  })

})


app.post('/add',(req,res)=>{
  const pet=Pet({
    name:req.body.name,
    type:req.body.type,
    desc:req.body.type,
    skillf:req.body.skillf,
    skills:req.body.skills,
    skillt:req.body.skillt,


  })


  pet.save().then(res=>{
    
  }).catch((err)=>{
    console.log(err)
  })



  

})






app.listen(5000)