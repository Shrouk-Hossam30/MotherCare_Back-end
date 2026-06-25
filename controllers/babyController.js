import Baby from "../models/Baby.js";



// add baby

export const addBaby =
async(req,res)=>{


const baby =
await Baby.create({

mother:req.body.mother,

name:req.body.name,

birthDate:req.body.birthDate,

weight:req.body.weight,

height:req.body.height

});


res.json(baby);

}




// get baby


export const getBaby =
async(req,res)=>{


const baby =
await Baby.find({
mother:req.params.id
});


res.json(baby);


}




// update baby

export const updateBaby =
async(req,res)=>{


const baby =
await Baby.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);


res.json(baby);


}




// delete baby

export const deleteBaby =
async(req,res)=>{


await Baby.findByIdAndDelete(
req.params.id
);


res.json({
message:"deleted"
});


}