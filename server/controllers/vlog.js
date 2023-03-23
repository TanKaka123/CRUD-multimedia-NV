// import db from "../database/createConnectionMySql.js";
import { v4 as uuidv4 } from "uuid";
import Vlogs from "../models/vlog.js";
import Grid  from "gridfs-stream";  
import mongoose from "mongoose";

const getVlogs = async (req, res) => {

  try{
    const data = await Vlogs.find() ;
    return res.status(200).json(data);
  }
  catch(error)
  {
    return res.status.json(error);
  }

};

const getVlog = async (req, res) => {
  try{
    const data = await Vlogs.findOne({
      id: req.params.id 
    }) ;
    return res.status(200).json(data);
  }
  catch(error)
  {
    return res.status.json(error);
  }
};

const addVlog = async (req, res) => {
  console.log(req.body);
  if (req.file === undefined) return res.send("you must select a file.");

  const imgUrl = `http://localhost:8080/file/${req.file.filename}`;

  const data = Vlogs({
    id:uuidv4(),
    id_author: req.body.id_author,
    name_author: req.body.name_author,
    avatar_author: req.body.avatar_author,
    title: req.body.title,
    thumbnail:imgUrl,
    video_url: req.body.video_url,
    content: req.body.content,
  });

  try {
    const dataPost = await data.save();
    return res.status(200).json(dataPost);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateVlog = (req, res) => {

};


let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos"); 
}); 

const deleteVlog = async (req, res) => {

  const id = req.params.id;
  const thumbnailUrl = req.params.thumbnail;
  
  console.log(thumbnailUrl)
  await gfs.files.deleteOne({ filename: thumbnailUrl });

  try {
    const data = await Vlogs.findOneAndDelete({id}); 
    return res.status(200).json("delete succesfully");
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { getVlogs, getVlog, addVlog, deleteVlog, updateVlog };

