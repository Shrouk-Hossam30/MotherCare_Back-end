import mongoose from "mongoose";


const motherSchema =
new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},


phone:String,


age:Number,


healthNotes:String,


children:[
{
type:mongoose.Schema.Types.ObjectId,
ref:"Baby"
}
]


},{
timestamps:true
})


export default mongoose.model(
"Mother",
motherSchema
)