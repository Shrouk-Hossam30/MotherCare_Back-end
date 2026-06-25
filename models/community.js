import mongoose from "mongoose";


const communitySchema =
new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},


question:{
type:String,
required:true
},


answer:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
default:null
},


answeredAt:{
type:Date
}



},{
timestamps:true
})


export default mongoose.model(
"Community",
communitySchema
);