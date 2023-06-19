import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const commentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default : uuidv4()
  },
  idPost: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author_id: {
    type: String,
    required: true,
  },
  full_name_author: {
    type: String,
    required: true,
  },
  avatar_author: {
    type: String,
    required: true,
  },
  parent_id:{
    type: String
  }
});

const Comments = mongoose.model("Comments", commentSchema);
export default  Comments;
