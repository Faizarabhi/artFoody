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
    title: {
      type: String,
      required: [true, 'Please add a title value'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description value'],
    },
    image: {
      type: String,
      required: [true, 'Please add a image value'],
    },
    category:{
      
      type: String,
      required: [true, 'Please add a category value'],
    },
    cookingTime:{
      type: String,
      required: [true, 'Please add a cookingTime value']
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', postSchema)