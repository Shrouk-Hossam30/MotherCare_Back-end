import mongoose from "mongoose";


const schema =
new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},


age:Number,

phone:String,

pregnancyWeek:Number,

expectedDelivery:Date,

healthNotes:String

});


export default mongoose.model(
"Mother",
schema
);