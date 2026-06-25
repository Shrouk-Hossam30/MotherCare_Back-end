import mongoose from "mongoose";


const userSchema =
new mongoose.Schema({

name:{
type:String,
required:true
},


email:{
type:String,
unique:true
},


password:{
type:String,
required:true
},


role:{
type:String,
enum:[
"mother",
"doctor",
"admin"
],
default:"mother"
}


},
{
timestamps:true
});


export default mongoose.model(
"User",
userSchema
);