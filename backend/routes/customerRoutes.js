import express from "express"
import {
    addCustomer, deleteCustomer,
    getAllCustomer, updateCustomer
} from '../controllers/customerControllers.js'

const router = express.Router()

router.route('/')
    .post(addCustomer)
    .get(getAllCustomer)
    .put(updateCustomer)
router.route('/:id')
    .delete(deleteCustomer)
export default router
