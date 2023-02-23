const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const commentRoute = require('./routes/comments');
const multer = require('multer');
const path = require('path');
const conversationRoute = require('./routes/conversation');
const messageRoute = require('./routes/messages');

dotenv.config();

mongoose.set('strictQuery', true);
mongoose.set('useCreateIndex', true);

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MDB');
  }
);

app.use('/images', express.static(path.join(__dirname, 'public/images')));

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploaded succsessfully');
  } catch (error) {
    console.log(error);
  }
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/comments', commentRoute);

app.get('/api/search', (req, res) => {
  res.json('/api/users');

  try {
    return res.status(200).json('User found');
  } catch (error) {
    console.log(error);
  }
});

app.listen(8800, () => {
  console.log('Backeend server is runnning');
});
