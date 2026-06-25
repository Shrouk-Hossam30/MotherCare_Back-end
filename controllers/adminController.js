import User from "../models/User.js";
import Doctor from "../models/Doctor.js";



// get all users

export const getUsers =
async(req,res)=>{


const users =
await User.find();


res.json(users);

}




// verify doctor

export const verifyDoctor =
async(req,res)=>{


const doctor =
await Doctor.findByIdAndUpdate(

req.params.id,

{
verified:true
},

{
new:true
}

);


res.json(doctor);

}