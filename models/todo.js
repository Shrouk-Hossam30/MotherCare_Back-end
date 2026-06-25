import mongoose from "mongoose";


const todoSchema =
new mongoose.Schema({

mother:{
type:mongoose.Schema.Types.ObjectId,
ref:"Mother"
},


title:String,


completed:{
type:Boolean,
default:false
}


},{
timestamps:true
})


export default mongoose.model(
"Todo",
todoSchema
)