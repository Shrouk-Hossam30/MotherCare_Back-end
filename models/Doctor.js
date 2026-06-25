import mongoose from "mongoose";


const schema =new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},


speciality:String,


experience:Number,


certificate:String,


availableSlots:[String],


verified:{
type:Boolean,
default:false
}



});


export default mongoose.model(
"Doctor",
schema
);