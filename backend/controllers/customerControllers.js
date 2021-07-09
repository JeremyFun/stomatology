import asyncHandler from "express-async-handler"
import Customer from "../models/customerModel.js"

// @desc     Created new order
// @route    POST /api/orders
// @access   Private
export const addCustomer = asyncHandler(async (req, res) => {
    const {
        name,
        phone,
        novaposhta
    } = req.body
    if (name) {
        const customer = new Customer({
            name,
            phone,
            novaposhta
        })
        const createdCustomer = await customer.save()
        res.status(201).json(createdCustomer)
    }
})

export const getAllCustomer = asyncHandler(async (req, res) => {
    const customers = await Customer.find({})
    res.json(customers)
})

export default {addCustomer, getAllCustomer}
