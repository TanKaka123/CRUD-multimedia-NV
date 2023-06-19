// import db from "../database/createConnectionMySql.js";
import { v4 as uuidv4 } from "uuid";
import Reviews from "../models/review.js";
import Grid  from "gridfs-stream";
import mongoose from "mongoose";


const createReview = async (req, res) => {

  const data = Reviews({
    id:uuidv4(),
    id_author: req.body.id_author,
    name_author: req.body.name_author,
    avatar_author: req.body.avatar_author,
    title: req.body.title,
    thumbnail: req.body.thumbnail,
    content: req.body.content,
    url_product:  req.body.url_product
  }) 
  try {
    const dataPost = await data.save();
    return res.status(200).json(dataPost);
  }catch(error)
  {
    return res.status(400).json(error)
  }
};

const getReviews = async (req, res) => {
  
  try{
    const data = await Reviews.find();
    return res.status(200).json(data);
  }
  catch(error)
  {
    return res.status(400).json(error)
  }
  
};

const getReview = async (req, res) => {
  // const query = "SELECT * FROM review WHERE review.id= ?";
  
  // try{
  //   const data = await Reviews.findOne({
  //     id: req.params.id
  //   });
  //   return res.status(200).json(data);
  // }
  // catch(error)
  // {
  //   return res.status(400).json(error)
  // }
};

let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos"); 
}); 
const deleteReview = async (req, res) => {
  // const query = "DELETE FROM review WHERE review.id=?";
  // const values = [req.params.id];

  // db.query(query, [values],(err, data) => {
  //   if (err) return res.send(err);

  //   return res.status(200).send("Delete successfully");
  // });
  const id = req.params.id;
  const thumbnailUrl = req.params.thumbnail;

  await gfs.files.deleteOne({ filename: thumbnailUrl });
  try {
    const data = await Reviews.findOneAndDelete({id}); 
    return res.status(200).json("delete succesfully");
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { createReview, getReviews, getReview, deleteReview };
