const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    body: {
      type: String,
      required: [true, 'Please add a body value'],
    },
    image: {
      type: String,
      required: [true, 'Please add a image value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', postSchema)