import express from "express"
import {addFormula, deleteFormula, getAllFormula, updateFormula} from "../controllers/formulaControllers.js";

const router = express.Router()

router.route('/')
    .post(addFormula)
    .get(getAllFormula)
    .put(updateFormula)
router.route('/:id')
    .delete(deleteFormula)
export default router
