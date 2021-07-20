import express from "express"
import {addForm, deleteForm, getAllForm, updateForm} from "../controllers/formControllers.js";

const router = express.Router()

router.route('/')
    .post(addForm)
    .get(getAllForm)
    .put(updateForm)
router.route('/:id')
    .delete(deleteForm)

export default router
