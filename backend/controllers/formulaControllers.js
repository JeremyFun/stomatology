import asyncHandler from "express-async-handler"
import Formula from "../models/formulaModel.js"

// @desc     Created new order
// @route    POST /api/orders
// @access   Private
export const addFormula = asyncHandler(async (req, res) => {
    const {
        name
    } = req.body
    if (name) {
        const formula = new Formula({
            name
        })
        const createdFormula = await formula.save()
        res.status(201).json(createdFormula)
    }
})


export const updateFormula = asyncHandler(async (req, res) => {
    const element = await Formula.findById(req.body._id)
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


export const deleteFormula= asyncHandler(async (req, res) => {
    console.log(req.params.id, 'body delete')
    const element = await Formula.findById(req.params.id)
    if (element) {
        await element.remove()
        res.json({message: "Element removed"})
    } else {
        res.status(404)
        throw new Error('Element not found')
    }
})

export const getAllFormula = asyncHandler(async (req, res) => {
    const formula = await Formula.find({})
    res.json(formula)
})

export default {addFormula, getAllFormula, updateFormula, deleteFormula}
