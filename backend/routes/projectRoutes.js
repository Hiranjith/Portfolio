import express from "express";
import { addProject, updateProject, removeProject, showAllProject } from "../controllers/projectController.js";

const router = express.Router()

router.route('/').post(addProject).get(showAllProject)
router.route('/:id').put(updateProject).delete(removeProject)

export default router
