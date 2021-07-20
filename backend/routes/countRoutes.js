import express from "express"
import {addCount, deleteCount, getAllCount, updateCount} from "../controllers/countControllers.js";

const router = express.Router()

router.route('/')
    .post(addCount)
    .get(getAllCount)
    .put(updateCount)
router.route('/:id')
    .delete(deleteCount)
export default router
