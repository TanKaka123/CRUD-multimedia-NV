import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";


let date_ob = new Date(); 
let date = ("0" + date_ob.getDate()).slice(-2); 
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2); 
let year = date_ob.getFullYear(); 
let hours = date_ob.getHours(); 
let minutes = date_ob.getMinutes(); 
let seconds = date_ob.getSeconds();
let currentTime  = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

const blogSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default : uuidv4()
  },
  id_author: {
    type: String,
    required: true,
  },
  name_author: {
    type: String,
    required: true,
  },
  avatar_author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,

  },
  content: {
    type: String,
    required: true,
  },
  number_view: {
    type: Number,
    default : 1
  },
  number_love: {
    type: Number,
    default : 0
  },
  created_at: {
    type: String,
    default : currentTime
  }
});

const Blogs = mongoose.model("Blogs", blogSchema);
export default  Blogs;
