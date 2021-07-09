import express from "express"
import {addCount, getAllCount} from "../controllers/countControllers.js";

const router = express.Router()

router.route('/')
    .post(addCount)
    .get(getAllCount)

export default router
