import mongoose from "mongoose";


const pointSchema =
new mongoose.Schema({


user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},


points:{
type:Number,
default:0
},


level:{
type:Number,
default:1
}


})


export default mongoose.model(
"Point",
pointSchema
)