const router = require('express').Router();
const Comment = require('../models/Comment');

// create a comment
router.post('/', async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const saveComment = await newComment.save();
    res.status(200).json(saveComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get comments by postId
router.get('/', async (req, res) => {
  try {
    const { postId } = req.query;
    const currentComments = await Comment.find({ postId: postId });
    res.status(200).json(currentComments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete comment
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment.userId === req.body.userId) {
      await comment.deleteOne();
      res.status(200).json('The comment has been deleted successfully');
    } else {
      res.status(403).json("You can delete only your's comment");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
