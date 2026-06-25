import User from "../models/User.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";



export const register =
async(req,res)=>{


const {
name,
email,
password,
role
}=req.body;



const exists =
await User.findOne({
email
});


if(exists)
return res.status(400)
.json({
message:"User exists"
});



const hash =
await bcrypt.hash(
password,
10
);



const user =
await User.create({

name,

email,

password:hash,

role

});



res.json(user);


}






export const login =
async(req,res)=>{


const user =
await User.findOne({

email:req.body.email

});



if(!user)

return res.status(404)
.json({
message:"Not found"
});



const match =
await bcrypt.compare(

req.body.password,

user.password

);



if(!match)

return res.status(401)
.json({
message:"Wrong password"
});




const token =
jwt.sign({

id:user._id,

role:user.role

},

process.env.JWT_SECRET

);



res.json({

token,

user

});


}