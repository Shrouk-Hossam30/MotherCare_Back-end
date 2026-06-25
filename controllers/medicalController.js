import MedicalRecord 
from "../models/MedicalRecord.js";



export const addRecord =
async(req,res)=>{


const record =
await MedicalRecord.create({

mother:req.body.mother,

doctor:req.user.id,

file:req.file.path,

description:req.body.description

});


res.json(record);

}