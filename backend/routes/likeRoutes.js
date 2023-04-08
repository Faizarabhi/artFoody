const express = require('express')
const router = express.Router()
const {
    setLike,
    countLike
} = require('../controllers/likeController');
const { protect } = require('../middleware/authMiddleware');


router.route('/:id').get(countLike).post(protect, setLike)

module.exports = router
