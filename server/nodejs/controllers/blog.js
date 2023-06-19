// import  db  from "../database/createConnectionMySql.js";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import Blogs from "../models/blog.js";
import Grid  from "gridfs-stream";
import mongoose from "mongoose";
const getBlogs = async (req, res) => {
  try {
    const data = await Blogs.find();
    return res.status(200).json(data);
  } catch (e) {
    return res.send(err);
  }
};

const increaseLove = (req, res) => {
  const postId = req.params.id;

  Blogs.findOneAndUpdate(
    { id: postId },
    { $inc: { number_love: 1 } },
    { returnOriginal: false },
    (err, result) => {
      if (err) {
        return res.send(err);
      }
      return res.status(200).json("Blog has been updated");
    }
  );
};
const decreaseLove = (req, res) => {
  const postId = req.params.id;
  Blogs.findOneAndUpdate(
    { id: postId },
    { $inc: { number_love: -1 } },
    { returnOriginal: false },
    (err, result) => {
      if (err) {
        return res.send(err);
      }
      return res.status(200).json("Blog has been updated");
    }
  );
};

const updateView = (req, res) => {
  const postId = req.params.id;
  Blogs.findOneAndUpdate(
    { id: postId },
    { $inc: { number_view: 0.5 } },
    { returnOriginal: false },
    (err, result) => {
      if (err) {
        return res.send(err);
      }
      return res.status(200).json("Blog has been updated");
    }
  );
};

const getBlog = async (req, res) => {
  try {
    const data = await Blogs.findOne({
      id: req.params.id,
    });
    return res.status(200).json(data);
  } catch (e) {
    return res.send(err);
  }
};

const addBlog = async (req, res) => {
  console.log(req.body);
  if (req.file === undefined) return res.send("you must select a file.");

  const imgUrl = `http://localhost:8080/file/${req.file.filename}`;

  const data = Blogs({
    id: uuidv4(),
    id_author: req.body.id_author,
    name_author: req.body.name_author,
    avatar_author: req.body.avatar_author,
    title: req.body.title,
    thumbnail: imgUrl,
    content: req.body.content,
  });

  try {
    const dataPost = await data.save();
    return res.status(200).json(dataPost);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateBlog = (req, res) => {
  //     const postId = req.params.id;
  //     const q = "UPDATE blog SET `title`=?, `thumbnail`=?, `content`=? WHERE `id`=?";
  //     const values = [
  //       req.body.title,
  //       "https://www.creatopy.com/blog/wp-content/uploads/2016/08/how-to-use-banner-ads-on-blogs-.png",
  //       req.body.content
  //     ];
  //     db.query(q, [...values, postId],(err, data)=>{
  //       return res.json("Blog has been updated")
  //     })
  //  // })
};

let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos"); 
}); 

const deleteBlog = async (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid");

  const id = req.params.id;
  const thumbnailUrl = req.params.thumbnail;
  
  console.log(thumbnailUrl)
  await gfs.files.deleteOne({ filename: thumbnailUrl });

  try {
    const data = await Blogs.findOneAndDelete({id}); 
    return res.status(200).json("delete succesfully");
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

};

export {
  getBlogs,
  getBlog,
  addBlog,
  deleteBlog,
  updateBlog,
  increaseLove,
  decreaseLove,
  updateView,
};

