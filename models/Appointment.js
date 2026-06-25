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


date:Date,


status:{
type:String,

enum:[
"pending",
"accepted",
"rejected"
],

default:"pending"

}


});


export default mongoose.model(
"Appointment",
schema
);