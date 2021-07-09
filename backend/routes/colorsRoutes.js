import express from "express"
import {addColors, getAllColors, updateColors} from "../controllers/colorsControllers.js";

const router = express.Router()

router.route('/')
    .post(addColors)
    .get(getAllColors)
    .put(updateColors)

export default router
