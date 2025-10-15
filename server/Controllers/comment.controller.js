import Comment from "../Models/comment.model.js"
import Post from "../Models/blog.model.js"

export const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { postId } = req.params;

    const comment = await Comment.create({
      text,
      author: req.user,
      post: postId,
    });

    await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id } });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ post: postId }).populate(
      "author",
      "username"
    );
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
