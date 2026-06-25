import mongoose from "mongoose";


const schema =
new mongoose.Schema({


mother:{
type:mongoose.Schema.Types.ObjectId,
ref:"Mother"
},


doctor:{
type:mongoose.Schema.Types.ObjectId,
ref:"Doctor"
},


file:String,


description:String



},
{
timestamps:true
});


export default mongoose.model(
"MedicalRecord",
schema
);