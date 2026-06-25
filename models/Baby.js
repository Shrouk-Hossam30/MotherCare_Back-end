import mongoose from "mongoose";


const babySchema =
new mongoose.Schema({


mother:{
type:mongoose.Schema.Types.ObjectId,
ref:"Mother"
},


name:{
type:String,
required:true
},


birthDate:{
type:Date,
required:true
},


gender:String,


stage:{
type:String,

enum:[
"day_one",
"infant",
"toddler",
"child",
"teenager"
]

}


},{
timestamps:true
})



export default mongoose.model(
"Baby",
babySchema
);