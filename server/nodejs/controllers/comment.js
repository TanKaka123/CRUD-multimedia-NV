
  import { v4 as uuidv4 } from "uuid";
  import Comments from "../models/comment.js";

  const createParentComment = async (req, res) => {

  const data = Comments({
    id:uuidv4(),
    idPost: req.body.idPost,
    content: req.body.content,
    author_id: req.body.author_id,
    full_name_author: req.body.full_name_author,
    avatar_author: req.body.avatar_author,
  });

  try {
    const dataComment = await data.save();
    return res.status(200).json(dataComment);
  } catch (error) {
      return res.status(500).json(error.message);
  }
  };

  const createChildComment = async (req, res) => {
    const data = Comments({
      id:uuidv4(),
      idPost: req.params.idPost,
      content: req.body.content,
      author_id: req.body.author_id,
      full_name_author: req.body.full_name_author,
      avatar_author: req.body.avatar_author,
      parent_id:req.params.idParent,
    });
  
    try {
      const dataComment = await data.save();
      return res.status(200).json(dataComment);
    } catch (error) {
        return res.status(500).json(error.message);
    }
 
  };

  const getComments = async (req, res) => {
    try {
      const data = await Comments.find({
        idPost:req.params.idPost
      ,parent_id: { $exists: false} });
      return res.status(200).json(data);
    } catch (err) {
      return res.send(err);
    }
  };

  const getChildComments = async(req, res) => {
    try {
      const data = await Comments.find({
        idPost:req.params.idPost
      , parent_id: req.params.idParent });
      return res.status(200).json(data);
    } catch (err) {
      return res.send(err);
    }
  };

  const deleteComment = async (req, res) => {
   const id = req.params.id;

    try {
      const data = await Comments.findOneAndDelete({id}); 
      return res.status(200).json("delete succesfully");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  export { createParentComment, createChildComment, deleteComment, getComments, getChildComments };
 