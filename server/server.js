const express  =require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser")

const userModel = require("./Modals/User");
const ProfileSchema = require("./Modals/profile")
const app =express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://subbareddydaginti406:subbareddy@cluster0.osu1rar.mongodb.net/profile?retryWrites=true&w=majority").then(console.log("db connected")).catch((err)=>(err))

// {app.post("/login",(req,res)=>{
//     const {email,password} = req.body;
//     userModel.findOne({email: email}).then(user=>{
//         if(user){
//             if(user.password === password){
                
//             } else{res.json("The password has incorrect")}
//         }else{
//             res.json("There is no User with this Detailes")
//         }
//     })
// })}


// {app.post("/register",(req,res)=>{
//      userModel.create(req.body)
//     .then(Users => res.json(Users))
//     .catch((err)=>res.json(err))
// })}

app.post('/Profile',async(req,res)=>{
    // const NewProfile = ProfileModal.create(req.body)
    try {
      const newProfile = new ProfileSchema(req.body);
      await newProfile.save();
      return res.json((await ProfileSchema.find()));
  } catch (err) {
      console.log(err);
  }

})

app.delete("/deleteall",(req,res)=>{
  ProfileSchema.deleteMany()
    return res.send('Success fully Delete')
})
app.delete("/delete/:id", async (req, res) => {
    try {
      const deletedProfile = await ProfileSchema.findByIdAndDelete(req.params.id);
  
      if (!deletedProfile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
  
      return res.status(200).json({ message: 'Successfully deleted profile', deletedProfile });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  })

app.get('/getProfile',async(req,res)=>{
    try{
        return res.json(await ProfileSchema.find());

    }catch(err){
        console.log(err)
    }
})


app.listen(3001,()=>{
    console.log("server runing on Port no 3001")
})