const mongoose= require('mongoose')


const Pet=mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  type:{
    type:String,
    require:true,
  },
  desc:{
    type:String,
    require:true,
  },
  skillf:{
    type:String,
    require:true,
  },
  skills:{
    type:String,
    require:true,
  },
  skillt:{
    type:String,
    require:true,
  },


})


module.exports= mongoose.model("pet",Pet)