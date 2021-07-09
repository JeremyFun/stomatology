import asyncHandler from "express-async-handler"
import Colors from "../models/colorsModel.js"

// @desc     Created new order
// @route    POST /api/orders
// @access   Private
export const addColors = asyncHandler(async (req, res) => {
    const {
        name
    } = req.body
    if (name) {
        const colors = new Colors({
            name
        })
        const createdColors = await colors.save()
        res.status(201).json(createdColors)
    }
})

export const updateColors = asyncHandler(async (req, res) => {
    console.log(req.body, 'body')
    const element = await Colors.findById(req.body._id)
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


export const getAllColors = asyncHandler(async (req, res) => {
    const colors = await Colors.find({})
    res.json(colors)
})

export default {addColors, getAllColors, updateColors}
