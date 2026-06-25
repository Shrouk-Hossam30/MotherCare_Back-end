import Appointment from "../models/Appointment.js";



export const createAppointment =
async(req,res)=>{


const appointment =
await Appointment.create({

mother:req.body.mother,

doctor:req.body.doctor,

date:req.body.date

});


res.json(appointment);

}




export const getAppointments =
async(req,res)=>{


const data =
await Appointment.find()
.populate("mother")
.populate("doctor");


res.json(data);

}




export const updateAppointment =
async(req,res)=>{


const appointment =
await Appointment.findByIdAndUpdate(

req.params.id,

{
status:req.body.status
},

{
new:true
}

);


res.json(appointment);

}