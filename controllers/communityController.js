import Post from "../models/Post.js";



// create post

export const createPost =
async(req,res)=>{


const post =
await Post.create({

user:req.user.id,

content:req.body.content

});


res.json(post);


}




// get posts

export const getPosts =
async(req,res)=>{


const posts =
await Post.find()
.populate("user");


res.json(posts);


}




// like post

export const likePost =
async(req,res)=>{


const post =
await Post.findById(
req.params.id
);


post.likes.push(
req.user.id
);


await post.save();


res.json(post);


}