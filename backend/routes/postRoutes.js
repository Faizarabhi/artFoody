const express = require('express')
const router = express.Router()
const {
    getPosts,
    setPost,
    updatedPost,
    deletePost,
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get( getPosts).post(protect, setPost)
router.route('/:id').delete(protect, deletePost).put(protect, updatedPost)

module.exports = router
