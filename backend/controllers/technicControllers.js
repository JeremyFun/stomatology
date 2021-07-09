import asyncHandler from "express-async-handler"
import Technic from "../models/technicModel.js"

// @desc     Created new order
// @route    POST /api/orders
// @access   Private
export const addTechnic = asyncHandler(async (req, res) => {
    const {
        name
    } = req.body
    if (name) {
        const customer = new Technic({
            name
        })
        const createdCustomer = await customer.save()
        res.status(201).json(createdCustomer)
    }
})

export const getAllTechnic = asyncHandler(async (req, res) => {
    const customers = await Technic.find({})
    res.json(customers)
})

export default {addTechnic, getAllTechnic}
