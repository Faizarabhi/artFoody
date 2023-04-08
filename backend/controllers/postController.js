const asyncHandler = require('express-async-handler')
const multer = require('multer');
const Post = require('../models/postModel')
const User = require('../models/userModel')
const Like = require('../models/likeModel')
// @desc    Get post
// @route   GET /api/post
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
 
 
  const posts = await Post.find();
  const userId = req.params.id; // Assuming you have the user ID in the req object
  
  const likesCounts = await Promise.all(posts.map(post => {
    return Like.count({ post: post._id });
  }));
  
  const postLikes = await Promise.all(posts.map(post => {
    return Like.exists({ user: userId, post: post._id });
  }));
  
  const postsWithLikes = posts.map((post, i) => {
    return {
      ...post.toObject(),
      likes: likesCounts[i],
      likedByUser: postLikes[i]
    };
  });
  
  console.log(postsWithLikes,'rr');
    
  res.status(200).json(postsWithLikes);
})

// @desc    Set post
// @route   POST /api/posts
// @access  Private


const setPost = asyncHandler(async (req, res, upload) => {
  const { body,title,description,category } = req.body
  const image = `../../../../uploads/${req.file.filename}` // This will contain the filename of the uploaded image
console.log(image)
  if (!body || !image) {
    res.status(400)
    throw new Error('Please add a body field and an image')
  }

  const post = await Post.create({
    body: body,
    image: image,
    title:title,
    description:description,
    category:category,
    user: req.user.id,
  })

  res.status(200).json(post)
})



// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Private
const updatedPost = asyncHandler( async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {title
    res.status(400)
    throw new Error('Post not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the post user
  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  // Update the post data
  post.body = req.body.body;
  if (req.file) {
    post.image = req.file.filename;
  }
  const updatedPost = await post.save();

  res.status(200).json(updatedPost)
})


// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
//   const productSchema = new Schema({ 
//     likes: [{ type: Schema.Types.ObjectId, ref:'likes' }]
// }, {timestamps: true});
  if (!post) {
    res.status(400)
    throw new Error('Post not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the post user
  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await post.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getPosts,
    setPost,
    updatedPost,
    deletePost,
}