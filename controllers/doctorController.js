import Doctor from "../models/Doctor.js";


// create doctor profile

export const createDoctor =
async(req,res)=>{

try{

const doctor =
await Doctor.create({

user:req.user.id,

speciality:req.body.speciality,

experience:req.body.experience,

certificate:req.body.certificate,

availableSlots:req.body.availableSlots

});


res.json(doctor);


}catch(error){

res.status(500)
.json({
message:error.message
})

}

}



// get doctor profile

export const getDoctor =
async(req,res)=>{


const doctor =
await Doctor.findOne({
user:req.user.id
})
.populate("user");


res.json(doctor);

}



// get all doctors

export const getDoctors =
async(req,res)=>{


const doctors =
await Doctor.find({
verified:true
})
.populate("user");


res.json(doctors);


}