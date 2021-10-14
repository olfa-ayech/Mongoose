const validator=require("validator")
const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const PersonSchema=new Schema({
  prenom:{
        type:String,
        required:true
    },
   nom:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:18,
        max:40,
        },
    email:{
        type:String,
        required:true,
        validate:(value)=>validator.isEmail(value),
    },
    job:{
        type:String,
        required:true,
    },
    adress:String


});
module.exports=mongoose.model('Person',PersonSchema);