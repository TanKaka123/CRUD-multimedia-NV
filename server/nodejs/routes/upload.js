import upload from "../middlewares/upload.js";
import express from "express";
const router = express.Router();

router.post("/upload", upload.single("photo"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
   
    const imgUrl = `https://backend-nv.vercel.app/file/${req.file.filename}`;
    return res.send(imgUrl);
});

export default router;
