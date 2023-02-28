const mongoose = require('mongoose')

const contact = mongoose.Schema({
    fname:{
        type:String,
        required:true,
      
    },
    lname:{
        type:String,
        required:true,
       
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})


const ContactManegment = mongoose.model("Contact",contact)
    console.log(ContactManegment)
module.exports = ContactManegment