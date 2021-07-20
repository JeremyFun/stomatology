import asyncHandler from "express-async-handler"
import Form from "../models/formModel.js"

// @desc     Created new order
// @route    POST /api/orders
// @access   Private
export const addForm = asyncHandler(async (req, res) => {
    const {
        colors,
        count,
        costumer,
        formula,
        introduction,
        pacient,
        services,
        technic,
        time,
        id
    } = req.body
    console.log(req.body)
    if (req.body) {
        const form = new Form({
            colors,
            count,
            costumer,
            formula,
            introduction,
            pacient,
            services,
            technic,
            time,
            id
        })
        const createdForm = await form.save()
        res.status(201).json(createdForm)
    }
})

export const updateForm = asyncHandler(async (req, res) => {
    console.log(req.body, 'body')
    const element = await Form.findById(req.body._id)
    if (element) {
        element.count = req.body.count || element.count
        element.colors = req.body.colors || element.colors
        element.costumer = req.body.costumer || element.costumer
        element.formula = req.body.formula || element.formula
        element.introduction = req.body.introduction || element.introduction
        element.pacient = req.body.pacient || element.pacient
        element.services = req.body.services || element.services
        element.technic = req.body.technic || element.technic
        element.time = req.body.time || element.time
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


export const deleteForm = asyncHandler(async (req, res) => {
    console.log(req.params.id, 'body delete')
    const element = await Form.findById(req.params.id)
    if (element) {
        await element.remove()
        res.json({message: "Element removed"})
    } else {
        res.status(404)
        throw new Error('Element not found')
    }
})
export const getAllForm = asyncHandler(async (req, res) => {
    const form = await Form.find({})
    res.json(form)
})

export default {addForm, getAllForm, updateForm, deleteForm}
