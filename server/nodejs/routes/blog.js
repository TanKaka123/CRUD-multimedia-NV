import express from "express";
import { addBlog, getBlog, getBlogs, deleteBlog, increaseLove, decreaseLove, updateView   } from "../controllers/blog.js";
import upload from "../middlewares/upload.js";
const router = express.Router();


router.get("/", getBlogs);
router.get("/:id", getBlog);

router.post("/",upload.single("photo"), addBlog);
router.post("/increaseLove/:id", increaseLove);
router.post("/decreaseLove/:id", decreaseLove);
router.post("/updateView/:id", updateView);
router.delete("/:id/:thumbnail", deleteBlog); 


export default router;