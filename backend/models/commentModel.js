const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    
    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post',
      },
    body: {
      type: String,
      required: [true, 'Please add a body value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Comment', commentSchema)