import express from "express"
import {addServices, deleteServices, getAllServices, updateServices} from "../controllers/servicesControllers.js";

const router = express.Router()

router.route('/')
    .post(addServices)
    .get(getAllServices)
    .put(updateServices)
router.route('/:id')
    .delete(deleteServices)

export default router
