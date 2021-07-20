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


export const updateTechnic= asyncHandler(async (req, res) => {
    const element = await Technic.findById(req.body._id)
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


export const deleteTechnic= asyncHandler(async (req, res) => {
    console.log(req.params.id, 'body delete')
    const element = await Technic.findById(req.params.id)
    if (element) {
        await element.remove()
        res.json({message: "Element removed"})
    } else {
        res.status(404)
        throw new Error('Element not found')
    }
})

export const getAllTechnic = asyncHandler(async (req, res) => {
    const customers = await Technic.find({})
    res.json(customers)
})

export default {addTechnic, getAllTechnic}
