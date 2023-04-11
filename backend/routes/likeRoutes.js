const express = require('express')
const router = express.Router()
const {
    setLike,
    countLike
} = require('../controllers/likeController');
const { protect } = require('../middleware/authMiddleware');


router.route('/:id').get(protect, countLike).post(protect, protect, setLike)

module.exports = router
