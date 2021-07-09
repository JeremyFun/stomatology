import express from "express"
import {addFormula, getAllFormula} from "../controllers/formulaControllers.js";

const router = express.Router()

router.route('/')
    .post(addFormula)
    .get(getAllFormula)

export default router
