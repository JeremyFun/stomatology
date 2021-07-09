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

export const getAllFormula = asyncHandler(async (req, res) => {
    const formula = await Formula.find({})
    res.json(formula)
})

export default {addFormula, getAllFormula}
