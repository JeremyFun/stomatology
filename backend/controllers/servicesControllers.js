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

export const updateServices = asyncHandler(async (req, res) => {
    const element = await Services.findById(req.body._id)
    if (element) {
        element.name = req.body.name || element.name
        const updatedElement = await element.save()
        res.json({
            _id: updatedElement._id,
            name: updatedElement.name,

        })
    } else {
        res.status(404)
        throw new Error('Element not found')
    }
})


export const deleteServices= asyncHandler(async (req, res) => {
    console.log(req.params.id, 'body delete')
    const element = await Services.findById(req.params.id)
    if (element) {
        await element.remove()
        res.json({message: "Element removed"})
    } else {
        res.status(404)
        throw new Error('Element not found')
    }
})



export const getAllServices = asyncHandler(async (req, res) => {
    const services = await Services.find({})
    res.json(services)
})

export default {addServices, getAllServices, updateServices, deleteServices}
