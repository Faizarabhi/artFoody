const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')
const Like = require('../models/likeModel')

// @desc    Get post
// @route   GET /api/post
// @access  Private
const getLikes = asyncHandler(async (req, res) => {
    //     const posts = await Post.find()
    //     res.status(200).json(posts)
})

// @desc    Set post
// @route   POST /api/posts
// @access  Private
const setLike = asyncHandler(async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.user._id;
        const existingLike = await Like.findOne({ user: userId, post: postId });

        if (!existingLike) {
            // If the like does not exist, create a new one
            const newLike = new Like({
                user: userId,
                post: postId,
                state: state
            });

            await newLike.save();

            res.status(201).json({ success: true, data: newLike });
        } else {
            // If the like already exists, update the state field if necessary
            existingLike.state = !existingLike.state;
            await existingLike.save();

            res.status(200).json({ success: true, data: existingLike });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error updating like' });
    }
})


module.exports = {
    
    setLike,
   
}