import asyncHandler from "express-async-handler"
import Count from "../models/countModel.js"

// @desc     Created new order
// @route    POST /api/orders
// @access   Private
export const addCount = asyncHandler(async (req, res) => {
    const {
        name
    } = req.body
    if (name) {
        const count = new Count({
            name
        })
        const createdCount = await count.save()
        res.status(201).json(createdCount)
    }
})

export const updateCount = asyncHandler(async (req, res) => {
    console.log(req.body, 'body')
    const element = await Count.findById(req.body._id)
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


export const deleteCount = asyncHandler(async (req, res) => {
    console.log(req.params.id, 'body delete')
    const element = await Count.findById(req.params.id)
    if (element) {
        await element.remove()
        res.json({message: "Element removed"})
    } else {
        res.status(404)
        throw new Error('Element not found')
    }
})

export const getAllCount = asyncHandler(async (req, res) => {
    const count = await Count.find({})
    res.json(count)
})

export default {addCount, getAllCount, updateCount, deleteCount}
