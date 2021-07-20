import express from "express"
import {
    addTechnic, deleteTechnic,
    getAllTechnic, updateTechnic
} from '../controllers/technicControllers.js'

const router = express.Router()

router.route('/')
    .post(addTechnic)
    .get(getAllTechnic)
    .put(updateTechnic)
router.route('/:id')
    .delete(deleteTechnic)
export default router
