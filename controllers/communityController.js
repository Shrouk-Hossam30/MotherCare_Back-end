import Community from "../models/Community.js";



// Mother ask question

export const createQuestion =
async(req,res)=>{


const question =
await Community.create({

user:req.user.id,

question:req.body.question

});


res.status(201)
.json(question);


}





// Doctor reply only

export const replyQuestion =
async(req,res)=>{


if(req.user.role !== "doctor"){

return res.status(403)
.json({

message:"Only doctors can reply"

})

}



const question =
await Community.findByIdAndUpdate(

req.params.id,

{

answer:req.user.id,

answeredAt:new Date()

},

{
new:true
}


);



res.json(question);


}