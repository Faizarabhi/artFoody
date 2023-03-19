const path = require('path');
const express = require('express');
const colors = require('colors');
const fs = require('fs');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;


connectDB();

const app = express();

const uploadDirectory = './uploads';
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));


app.use('/api/users',( require('./routes/userRoutes')));
app.use('/api/posts',( require('./routes/postRoutes')));
app.use('/api/comments',( require('./routes/commentRoutes')));
app.use('/api/likes',( require('./routes/likeRoutes')));



app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
