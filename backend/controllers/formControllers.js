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

export const getAllForm = asyncHandler(async (req, res) => {
    const form = await Form.find({})
    res.json(form)
})

export default {addForm, getAllForm}
