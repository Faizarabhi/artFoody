const express = require('express')
const router = express.Router()
const {
    setLike,
} = require('../controllers/likeController');
const { protect } = require('../middleware/authMiddleware');


router.route('/:id').post(protect, setLike)

module.exports = router
