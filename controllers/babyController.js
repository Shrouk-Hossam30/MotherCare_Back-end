import Baby from "../models/Baby.js";

import {
calculateBabyStage
}
from "../utils/babyAge.js";



export const addBaby =
async(req,res)=>{


try{


const stage =
calculateBabyStage(
req.body.birthDate
);



const baby =
await Baby.create({

mother:req.user.id,

name:req.body.name,

birthDate:req.body.birthDate,

gender:req.body.gender,

stage

});



res.status(201)
.json(baby);



}catch(error){

res.status(500)
.json({
message:error.message
})

}


}