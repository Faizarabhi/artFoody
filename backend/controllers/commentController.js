const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')
const Comment = require('../models/commentModel')

// @desc    Get comment
// @route   GET /api/comment
// @access  Private
const getcomments = asyncHandler(async (req, res) => {
    console.log(req)
  const comments = await Post.find({ post: req.post.id })
  res.status(200).json(comments)
})

// @desc    Set post
// @route   POST /api/posts
// @access  Private
const setComment = asyncHandler(async (req, res) => {
    const { body } = req.body
  if (!body ) {
    res.status(400)
    throw new Error('Please add a body field')
  }

  const comment = await Comment.create({
    body: body,
    user: req.user.id,
  })

  res.status(200).json(comment)
})

// @desc    Update comment
// @route   PUT /api/comments/:id
// @access  Private
const updatedComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(400)
    throw new Error('comment not found')
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

  const updatedComment = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedPost)
})

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

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
    getcomments,
    setComment,
    updatedComment,
    deleteComment,
}