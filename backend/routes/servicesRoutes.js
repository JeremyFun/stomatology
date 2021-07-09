import express from "express"
import {addServices, getAllServices} from "../controllers/servicesControllers.js";

const router = express.Router()

router.route('/')
    .post(addServices)
    .get(getAllServices)

export default router
