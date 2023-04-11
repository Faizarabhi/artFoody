const asyncHandler = require('express-async-handler')


const Like = require('../models/likeModel')

const getLike = asyncHandler(async(req,res)=>{
})


// @desc    Set like
// @route   like /api/likes
// @access  Private
const setLike = asyncHandler(async (req, res) => {
    
    try {
        const postId = req.params.id;
        const userId = req.user._id;
        // const userId = "641211a6f1b69a7d06ec7e3c";
        const existingLike = await Like.findOne({ user: '641211a6f1b69a7d06ec7e3c', post: postId });
        if (!existingLike) {
            // If the like does not exist, create a new one
            const newLike = new Like({
                user: userId,
                post: postId,
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
const countLike = asyncHandler(async (req, res) => {
    try {
        const postId = req.params.id;
        
        const number = await Like.count({ post: postId });
        res.status(200).json({ success: true, data: number, id:postId });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error count like' });
    }
})

module.exports = {

    setLike,
    countLike
}
