import express from "express";
import { addVlog, getVlog, getVlogs, deleteVlog  } from "../controllers/vlog.js";
import upload from "../middlewares/upload.js";
const router = express.Router();


router.get("/", getVlogs);
router.get("/:id", getVlog);
router.post("/", upload.single("photo"), addVlog);
router.delete("/:id/:thumbnail", deleteVlog); 


export default router;