const express = require("express")
const app = express()
const ContactManegment = require("../Scema/Schema")
app.use(express.json())
console.log(ContactManegment)

app.get("/v1/contact",async(req,res)=>{
      try{
        const Result = await ContactManegment.find()
        res.json({
            Result:Result
        })
      }
      catch(error){
        console.log(error)
      }
})

app.get("/v1/contact/:id",async(req,res)=>{
    try{
        const id=req.params.id
      const Result = await ContactManegment.find({_id:id})
      res.json({
          Result:Result
      })
    }
    catch(error){
      console.log(error)
    }
})

app.post("/v1/contact",async(req,res)=>{
    try{
        const id=req.params.id
      const Result = await ContactManegment.create(req.body)
      res.json({
          Result:Result
      })
    }
    catch(error){
      console.log(error)
    }
})

app.put("/v1/contact/:id",async(req,res)=>{
    try{
        const id=req.params.id
      const Result = await ContactManegment.findOneAndUpdate({_id:id},{
        fname:req.body.fname,
        lname:req.body.lname,
        phone:req.body.phone,
        email:req.body.email
      })
      res.json({
          Result:Result
      })
    }
    catch(error){
      console.log(error)
    }
})

app.patch("/v1/contact/:id",async(req,res)=>{
    try{
        const id=req.params.id
      const Result = await ContactManegment.findOneAndUpdate({_id:id},req.body)
      res.json({
          Result:Result
      })
    }
    catch(error){
      console.log(error)
    }
})

app.delete("/v1/contact/:id",async(req,res)=>{
    try{
        const id=req.params.id
      const Result = await ContactManegment.findOneAndDelete({_id:id})
      res.json({
          Result:Result
      })
    }
    catch(error){
      console.log(error)
    }
})




module.exports = app


