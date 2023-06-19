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

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default : uuidv4()
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },

  fullname: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
    required: true
  },
  description: {
    type: String
  },

  is_admin: {
    type: Boolean,
    default : 0
  },
  created_at: {
    type: String,
    default : currentTime
  },
});

const Users = mongoose.model("Users", userSchema);
export default  Users;
