import express from "express"
import {addForm, getAllForm} from "../controllers/formControllers.js";

const router = express.Router()

router.route('/')
    .post(addForm)
    .get(getAllForm)

export default router
