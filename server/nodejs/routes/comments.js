import express from "express";
import { createParentComment, createChildComment, deleteComment, getComments, getChildComments } from "../controllers/comment.js";
const router = express.Router();


router.get("/:idPost",getComments)

router.get("/:idPost/:idParent",getChildComments)
router.post("/:idPost", createParentComment)
router.post("/:idPost/:idParent", createChildComment)
router.delete("/:id",deleteComment)

export default router
 