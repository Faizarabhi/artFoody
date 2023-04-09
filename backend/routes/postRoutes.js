const express = require('express')
const router = express.Router()
const { getPosts,getPost, setPost, updatedPost, deletePost } = require('../controllers/postController')
const { protect } = require('../middleware/authMiddleware')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    },
})

const upload = multer({ storage: storage })

router.route('/').get(getPosts).post(protect, upload.single('image'), (req, res) => setPost(req, res, upload))

router.route('/:id').get(getPost,getPost).delete(protect, deletePost).put(protect, upload.single('image'), (req, res) => setPost(req, res, upload), updatedPost)

module.exports = router
