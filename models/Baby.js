import mongoose from "mongoose";


const schema =
new mongoose.Schema({


mother:{
type:mongoose.Schema.Types.ObjectId,
ref:"Mother"
},


name:String,


birthDate:Date,


weight:Number,


height:Number,


vaccines:[

{
name:String,
date:Date
}

]



});


export default mongoose.model(
"Baby",
schema
);