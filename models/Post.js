import mongoose from "mongoose";


const schema =
new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},


content:String,


likes:[
{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
}
]


},
{
timestamps:true
});


export default mongoose.model(
"Post",
schema
);