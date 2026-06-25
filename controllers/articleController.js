import Article from "../models/Article.js";

import Baby from "../models/Baby.js";




// admin create

export const createArticle =
async(req,res)=>{


const article =
await Article.create({

...req.body,

createdBy:req.user.id

});


res.json(article);

}





// mother recommendation

export const recommendedArticles =
async(req,res)=>{


const baby =
await Baby.findOne({

mother:req.user.id

});



const articles =
await Article.find({

stage:baby.stage

});



res.json(articles);



}