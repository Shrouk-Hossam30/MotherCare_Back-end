import Mother from "../models/Mother.js";


// create mother profile
export const createMotherProfile = async(req,res)=>{

try{

const mother = await Mother.create({

user:req.user.id,

age:req.body.age,

phone:req.body.phone,

pregnancyWeek:req.body.pregnancyWeek,

expectedDelivery:req.body.expectedDelivery,

healthNotes:req.body.healthNotes

});


res.json(mother);


}catch(error){

res.status(500).json({
message:error.message
})

}

}



// get mother profile

export const getMotherProfile = async(req,res)=>{

try{


const mother =
await Mother.findOne({
user:req.user.id
})
.populate("user");


res.json(mother);


}catch(error){

res.status(500).json({
message:error.message
})

}

}