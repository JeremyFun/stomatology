import asyncHandler from "express-async-handler"
import Services from "../models/servicesModel.js"

// @desc     Created new order
// @route    POST /api/orders
// @access   Private
export const addServices = asyncHandler(async (req, res) => {
    const {
        name
    } = req.body
    if (name) {
        const services = new Services({
            name
        })
        const createdServices = await services.save()
        res.status(201).json(createdServices)
    }
})

export const getAllServices = asyncHandler(async (req, res) => {
    const services = await Services.find({})
    res.json(services)
})

export default {addServices, getAllServices}
