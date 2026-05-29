import express from "express";
import { createAdmin, loginAdmin, logoutAdmin } from "../controllers/loginController.js";

const router = express.Router()

router.post('/signup', createAdmin)
router.post('/login', loginAdmin)
router.get('/logout', logoutAdmin)

export default router