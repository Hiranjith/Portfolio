import express from "express";
import { createContacts, 
    showAllContacts,
    removeContact
 } from "../controllers/contactController.js";

const router = express.Router()

router.route('/').post(createContacts).get(showAllContacts)
router.route('/:id').delete(removeContact)

export default router