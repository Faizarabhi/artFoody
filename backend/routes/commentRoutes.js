const express = require('express')
const router = express.Router()
const {
    getcomments,
    setComment,
    updatedComment,
    deleteComment,
} = require('../controllers/commentController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getcomments).post(protect, setComment)
router.route('/:id').delete(protect, deleteComment).put(protect, updatedComment)

module.exports = router
