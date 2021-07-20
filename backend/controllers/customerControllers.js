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

export const updateCustomer = asyncHandler(async (req, res) => {
    console.log(req.body, 'body')
    const element = await Customer.findById(req.body._id)
    if (element) {
        element.name = req.body.name || element.name
        element.phone = req.body.phone || element.phone
        element.novaposhta = req.body.novaposhta || element.novaposhta
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


export const deleteCustomer = asyncHandler(async (req, res) => {
    console.log(req.params.id, 'body delete')
    const element = await Customer.findById(req.params.id)
    if (element) {
        await element.remove()
        res.json({message: "Element removed"})
    } else {
        res.status(404)
        throw new Error('Element not found')
    }
})

export const getAllCustomer = asyncHandler(async (req, res) => {
    const customers = await Customer.find({})
    res.json(customers)
})

export default {addCustomer, getAllCustomer, deleteCustomer, updateCustomer}
