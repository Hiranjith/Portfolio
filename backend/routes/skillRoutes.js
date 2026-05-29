import express from "express";
import { addSkill, removeSkill, getSkill } from "../controllers/skillController.js";

const router = express.Router()

router.route('/').get(getSkill).post(addSkill)
router.delete('/:skillId', removeSkill)

export default router