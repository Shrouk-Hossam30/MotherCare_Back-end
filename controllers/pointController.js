import Point from "../models/Point.js";



export const addPoints =
async(userId,value)=>{


let userPoints =
await Point.findOne({
user:userId
});



if(!userPoints){


userPoints =
await Point.create({

user:userId,

points:value

});


}

else{


userPoints.points += value;



if(userPoints.points>=100)

userPoints.level=2;



if(userPoints.points>=200)

userPoints.level=3;



await userPoints.save();


}


}




export const getPoints =
async(req,res)=>{


const data =
await Point.findOne({

user:req.user.id

});


res.json(data);


}