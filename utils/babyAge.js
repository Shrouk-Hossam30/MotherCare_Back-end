export const calculateBabyStage=(birthDate)=>{


const age =
new Date().getFullYear()
-
new Date(birthDate).getFullYear();



if(age < 1)
return "day_one";


if(age < 3)
return "infant";


if(age < 6)
return "toddler";


if(age < 13)
return "child";


return "teenager";


}