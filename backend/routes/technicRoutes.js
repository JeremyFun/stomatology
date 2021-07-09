import express from "express"
import {
    addTechnic,
    getAllTechnic
} from '../controllers/technicControllers.js'

const router = express.Router()

router.route('/')
    .post(addTechnic)
    .get(getAllTechnic)

export default router
