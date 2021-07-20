import express from "express"
import {addColors, getAllColors, updateColors, deleteColors} from "../controllers/colorsControllers.js";

const router = express.Router()

router.route('/')
    .post(addColors)
    .get(getAllColors)
    .put(updateColors)
router.route('/:id')
    .delete(deleteColors)

export default router
