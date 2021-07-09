import express from "express"
import {
    addCustomer,
    getAllCustomer
} from '../controllers/customerControllers.js'

const router = express.Router()

router.route('/')
    .post(addCustomer)
    .get(getAllCustomer)

export default router
