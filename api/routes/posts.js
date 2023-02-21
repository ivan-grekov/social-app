const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
const search = require('../utils/searchPosts');

// create a post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update a post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('The post has been updated successfully');
    } else {
      res.status(403).json("You can update only your's post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json('The post has been deleted successfully');
    } else {
      res.status(403).json("You can delete only your's post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// like and dislike a post
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('The post has been liked successfully');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('The post has been disliked');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// get a post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get timeline posts

router.get('/timeline/:userId', async (req, res) => {
  try {
    const { q } = req.query;
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    const allPosts = userPosts.concat(...friendPosts);
    const keys = ['desc'];
    q
      ? res.status(200).json(search(allPosts, q, keys))
      : res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user's all posts

router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    const keys = ['desc'];
    const { q } = req.query;
    q
      ? res.status(200).json(search(posts, q, keys))
      : res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
